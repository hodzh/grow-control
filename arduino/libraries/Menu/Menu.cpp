/*
 * Menu.cpp
 *
 *  Created on: Jul 19, 2015
 *      Author: eugene
 */

#include "Menu.h"
#include "Display.h"
#include "DS3232RTC.h"
#include "TimeUtil.h"

#ifdef TMENU_DEBUG

#include "SerialLog.h"
#define MENU_TRACE_ITEM(data, indent) traceItem(data, indent)
#define MENU_TRACE(data) SERIAL_WRITE(data)
#define MENU_TRACELN(data) SERIAL_WRITELN(data)
#define MENU_PTRACE(data) SERIAL_PWRITE(data)
#define MENU_PTRACELN(data) SERIAL_PWRITELN(data)

#else

#define MENU_TRACE_ITEM(data, indent)
#define MENU_TRACE(data)
#define MENU_TRACELN(data)
#define MENU_PTRACE(data)
#define MENU_PTRACELN(data)

#endif

#define TMENU_FIELD_TYPE 0
#define TMENU_FIELD_FLAGS 1
#define TMENU_FIELD_TITLE 2
#define TMENU_FIELD_COMMAND 4
#define TMENU_FIELD_OFFSET 4
#define TMENU_FIELD_EXCHANGE 4
#define TMENU_FIELD_SIZE 6
#define TMENU_FIELD_MAX_VALUE 6

#define TMENU_SIZE_ROOT 2
#define TMENU_SIZE_MENU 4
#define TMENU_SIZE_COMMAND 6
#define TMENU_SIZE_COMMAND_STATE 8
#define TMENU_SIZE_EDITOR 6
#define TMENU_SIZE_STRUCT 8
#define TMENU_SIZE_UINT1 6
#define TMENU_SIZE_UINT8 8
#define TMENU_SIZE_UINT16 8
#define TMENU_SIZE_UINT32 10

const uint8_t menuItemSize[] PROGMEM = {
	TMENU_SIZE_ROOT,
	TMENU_SIZE_MENU,
	TMENU_SIZE_COMMAND,
	TMENU_SIZE_EDITOR,
	TMENU_SIZE_STRUCT,
	TMENU_SIZE_UINT1,
	TMENU_SIZE_UINT8,
	TMENU_SIZE_UINT16,
	TMENU_SIZE_UINT32
};

extern Display display;

Menu::Menu() {
	menuButtonUpAccCount = 5;
	menuButtonUpAcc = 0;
	menuButtonUpEditStep = 1;
	menuButtonUp = menuButtonUpMax;
	menuButtonUpHold = 0;
}

// ============== MENU ========================================

uint8_t Menu::buttonUp(int pin) {
	delay(menuButtonUpDelay);
	while (digitalRead(pin)) {
	}
	return 0;
}

uint8_t Menu::waitButton(int pin) {
	while (!digitalRead(pin)) {
	}
	buttonUp(pin);
	return 0;
}

void Menu::buttonUpAccReset() {
	menuButtonUpAcc = 0;
	menuButtonUp = menuButtonUpMax;
	menuButtonUpAccCount = menuButtonUpAccCountMin;
	menuButtonUpEditStep = 1;
}

uint8_t Menu::buttonUpAcc(int pin) {
	uint32_t ms0 = millis();

	if (!menuButtonUpHold) {
		delay(menuButtonUpDelay);
	}

	uint32_t ms1;
	while (digitalRead(pin)) {
		ms1 = millis();
		if (ms1 >= ms0 + menuButtonUp) {
			// holding
			menuButtonUpHold = 1;
			// accelerate
			if (++menuButtonUpAcc >= menuButtonUpAccCount) {
				menuButtonUpAcc = 0;

				if (menuButtonUp > menuButtonUpMin) {
					menuButtonUp >>= 1;
					menuButtonUpAccCount <<= 1;
				}

				if (menuButtonUp <= menuButtonUpMin) {
					menuButtonUp = 0;
					if (menuButtonUpEditStep < menuButtonUpEditStepMax) {
						menuButtonUpEditStep *= 5;
					}
				}
			}
			return 1;
		}
	}

	buttonUpAccReset();

	delay(menuButtonUpDelay);

	return 0;
}

void Menu::loop() {
	if (isStateCommand()) {
		commandUpdate();
		return;
	}
	uint8_t state = digitalRead(BUTTON_UP_PIN);
	while (state) {
		//SERIAL_WRITELN("BUTTON UP");
		moveUp();
		update();
		state = buttonUpAcc(BUTTON_UP_PIN);
	}
	// menuSettingsProgramTimerEdit
	state = digitalRead(BUTTON_DOWN_PIN);
	while (state) {
		//SERIAL_WRITELN("BUTTON DOWN");
		moveDown();
		update();
		state = buttonUpAcc(BUTTON_DOWN_PIN);
	}
	state = digitalRead(BUTTON_LEFT_PIN);
	if (state) {
		//SERIAL_WRITELN("BUTTON LEFT");
		buttonUp(BUTTON_LEFT_PIN);
		moveLeft();
		update();
		delay(menuButtonUpDelay);
	}
	state = digitalRead(BUTTON_RIGHT_PIN);
	if (state) {
		//SERIAL_WRITELN("BUTTON RIGHT");
		buttonUp(BUTTON_RIGHT_PIN);
		moveRight();
		update();
		delay(menuButtonUpDelay);
	}
}

uint8_t Menu::isStateEdit() const {
	return _state == MENU_STATE_EDIT ||
			_state == MENU_STATE_EDIT_LIST;
}

uint8_t Menu::isStateCommand() const {
	return _state == MENU_STATE_COMMAND;
}

uint8_t Menu::isStateList() const {
	return _state == MENU_STATE_LIST ||
			_state == MENU_STATE_EDIT_LIST;
}

void Menu::saveEdit() {
	editExchange(TMENU_EXCHANGE_SET);
	endEdit();
}

void Menu::editExchange(uint8_t save) {
	MENU_PTRACELN("editExchange");
	uint16_t exchange;
	uint16_t offset;
	getEditor(_currentParent, exchange, offset);
	uint8_t size;
	if (isList(_currentParent) &&
			getType(_currentParent) != TMENU_STRUCT) {
		size = getEditSize(_currentParent);
		if (size == 0) {
			offset *=8;
			offset += _index;
		} else {
			offset += size * _index;
		}
		offset += getOffset(_currentParent);
	}
	else {
		uint8_t* item = getCurrent();
		size = getEditSize(item);
		if (size == 0) {
			offset *= 8;
		}
		offset += getOffset(item);
		size = getEditSize(item);
	}
	((ExchangeHandler)exchange)
		((uint8_t*)&_editValue, save, offset, size);
}

void Menu::getEditor(uint8_t* item, uint16_t& exchange, uint16_t& offset) {
	offset = 0;
	exchange = 0;
	getEditor(item, exchange, offset, _listCount);
}

void Menu::getEditor(uint8_t* item, uint16_t& exchange, uint16_t& offset, uint8_t listIndex) {
	//MENU_PTRACELN("getEditor");
	switch(getType(item)) {
	case TMENU_EDITOR:
		//MENU_PTRACELN("editor found");
		//MENU_TRACE_ITEM(item, 0);
		exchange = getExchange(item);
		return;
	case TMENU_STRUCT:
		offset += getOffset(item);
		if (isList(item)) {
			offset += getSize(item) * _list[--listIndex];
		}
		break;
	case TMENU_ROOT:
		//MENU_PTRACELN("editor undefined");
		return;	return;
	}
	getEditor(getParent(item), exchange, offset, listIndex);
}

void Menu::endEdit() {
	MENU_PTRACELN("endEdit");
	if (_state == MENU_STATE_EDIT) {
		_state = MENU_STATE_MENU;
	} else if (_state == MENU_STATE_EDIT_LIST) {
		_state = MENU_STATE_LIST;
	} else {
		MENU_PTRACELN("state error");
	}
}

void Menu::beginEdit() {
	MENU_PTRACELN("beginEdit");
	if (_state == MENU_STATE_MENU) {
		_state = MENU_STATE_EDIT;
	} else if (_state == MENU_STATE_LIST) {
		_state = MENU_STATE_EDIT_LIST;
	} else {
		MENU_PTRACELN("state error");
	}
	_editValue = 0;
	editExchange(TMENU_EXCHANGE_GET);
}

uint8_t Menu::getType(uint8_t* item) {
	return pgm_read_byte(item);
}
uint8_t Menu::getFlags(uint8_t* item) {
	return pgm_read_byte(item + TMENU_FIELD_FLAGS);
}
uint16_t Menu::getTitle(uint8_t* item) {
	return pgm_read_word(item  + TMENU_FIELD_TITLE);
}
uint16_t Menu::getExchange(uint8_t* item) {
	return pgm_read_word(item  + TMENU_FIELD_EXCHANGE);
}
uint16_t Menu::getCommand(uint8_t* item) {
	return pgm_read_word(item  + TMENU_FIELD_COMMAND);
}
uint16_t Menu::getOffset(uint8_t* item) {
	return pgm_read_word(item  + TMENU_FIELD_OFFSET);
}
uint16_t Menu::getSize(uint8_t* item) {
	return pgm_read_byte(item + TMENU_FIELD_SIZE);
}
uint32_t Menu::getMaxValue(uint8_t* item) {
	uint32_t maxValue;
	switch (getType(item)) {
	case TMENU_UINT8:
	case TMENU_UINT16:
		maxValue = pgm_read_word(item + TMENU_FIELD_MAX_VALUE);
		break;
	case TMENU_UINT32:
		maxValue = pgm_read_word(item + TMENU_FIELD_MAX_VALUE);
		((uint16_t*) &maxValue)[1] = pgm_read_word(
				item + TMENU_FIELD_MAX_VALUE + 2);
		break;
	}
	return maxValue;
}
uint8_t Menu::getEditSize(uint8_t* item) {
	uint8_t size;
	switch (getType(item)) {
	case TMENU_UINT1:
		size = 0;
		break;
	case TMENU_UINT8:
		size = 1;
		break;
	case TMENU_UINT16:
		size = 2;
		break;
	case TMENU_UINT32:
		size = 4;
		break;
	default:
		MENU_PTRACELN("error getEditSize");
		break;
	}
	return size;
}
uint8_t Menu::getListCount(uint8_t* item) {
	return pgm_read_byte(item + pgm_read_byte(menuItemSize + getType(item)));
}

void Menu::editValue(uint8_t up) {
	MENU_PTRACE("editValue ");
	MENU_TRACELN(_editValue);
	if (up) {
		_editValue += 1;
		if (_editValue >= getMaxValue(getCurrent())) {
			_editValue = 0;
		}
	} else {
		if (_editValue < menuButtonUpEditStep) {
			_editValue = getMaxValue(getCurrent())-1;
		} else {
			_editValue -= 1;
		}
	}
	MENU_PTRACE("editValue ");
	MENU_TRACELN(_editValue);
}

void Menu::moveUp() {
	MENU_PTRACELN("moveUp");
	if (isStateCommand()) {
		return;
	}
	if (isStateEdit()) {
		editValue(1);
	} else {
		// navigate prev sibling
		if (_index == 0) {
			_index = _menuCount - 1;
		} else {
			_index--;
		}
	}
}

void Menu::moveDown() {
	MENU_PTRACELN("moveDown");
	if (isStateCommand()) {
		return;
	}
	if (isStateEdit()) {
		editValue(0);
	} else {
		// navigate next sibling
		if (_index == _menuCount - 1) {
			_index = 0;
		} else {
			_index++;
		}
	}
}

void Menu::moveLeft() {
	MENU_PTRACELN("moveLeft");
	uint8_t* current = _currentParent;
	switch (_state) {
	case MENU_STATE_COMMAND:
		break;
	case MENU_STATE_MENU:
		if (_currentParent != _root) {
			// navigate parent
			if (isList(_currentParent)) {
				_state = MENU_STATE_LIST;
				_index = _list[--_listCount];
				_menuCount = getListCount(_currentParent);
			} else {
				_currentParent = getParent(_currentParent);
				if (isList(_currentParent)) {
					_index = _list[--_listCount];
					_menuCount = getListCount(_currentParent);
				} else {
					setParent(_currentParent, current);
				}
			}
		}
		break;
	case MENU_STATE_EDIT:
	case MENU_STATE_EDIT_LIST:
		saveEdit();
		break;
	case MENU_STATE_LIST:
		// navigate parent
		_currentParent = getParent(_currentParent);
		if (isList(_currentParent)) {
			if (isLastList(_currentParent + getMenuSize(_currentParent))) {
				_index = _list[--_listCount];
				_menuCount = getListCount(_currentParent);
			} else {
				_state = MENU_STATE_MENU;
				setParent(_currentParent, current);
			}

		} else {
			_state = MENU_STATE_MENU;
			setParent(_currentParent, current);
		}
		break;
	}
}

void Menu::moveRight() {
	MENU_PTRACELN("moveRight");
	uint8_t* current;
	switch (_state) {
	case MENU_STATE_COMMAND:
		break;
	case MENU_STATE_MENU:
		current = getCurrent();
		if (isList(current)) {
			_currentParent = current;
			_state = MENU_STATE_LIST;
			_index = 0;
			_menuCount = getListCount(current);
		} else {
			switch (getType(current)) {
			case TMENU_ROOT:
			case TMENU_MENU:
			case TMENU_EDITOR:
			case TMENU_STRUCT:
				setParent(current, 0);
				break;
			case TMENU_COMMAND:
				command(current);
				break;
			case TMENU_COMMAND_ASYNC:
				commandAsync(current);
				break;
			case TMENU_UINT1:
				beginEdit();
				_editValue = !_editValue;
				saveEdit();
				break;
			case TMENU_UINT8:
			case TMENU_UINT16:
			case TMENU_UINT32:
				beginEdit();
				break;
			default:
				MENU_PTRACELN("unknown type");
				break;
			}
		}
		break;
	case MENU_STATE_EDIT:
	case MENU_STATE_EDIT_LIST:
		endEdit();
		break;
	case MENU_STATE_LIST:
		switch (getType(_currentParent)) {
		case TMENU_ROOT:
		case TMENU_MENU:
		case TMENU_EDITOR:
		case TMENU_STRUCT:
			_list[_listCount++] = _index;
			if (isLastList(_currentParent + getMenuSize(_currentParent))) {
				_currentParent += getMenuSize(_currentParent);
				_index = 0;
				_menuCount = getListCount(_currentParent);
			} else {
				_state = MENU_STATE_MENU;
				setParent(_currentParent, 0);
			}
			break;
		case TMENU_COMMAND:
			// list command
			command(_currentParent);
			break;
		case TMENU_UINT1:
			beginEdit();
			_editValue = !_editValue;
			saveEdit();
			break;
		case TMENU_UINT8:
		case TMENU_UINT16:
		case TMENU_UINT32:
			beginEdit();
			break;
		default:
			MENU_PTRACELN("unknown type");
			break;
		}
		break;
	}
}

void Menu::command(uint8_t* item) {
	MENU_PTRACE("command ");
	MENU_TRACE_ITEM(item, 0);
	uint16_t handler = pgm_read_word(item + TMENU_FIELD_COMMAND);
	clear();
	((CommandHandler)handler)();
}

void Menu::commandAsync(uint8_t* item) {
	MENU_PTRACE("command async ");
	MENU_TRACE_ITEM(item, 0);
	uint16_t handler = pgm_read_word(item + TMENU_FIELD_COMMAND);
	clear();
	((CommandHandler)handler)();
	_state = MENU_STATE_COMMAND;
}

void Menu::commandUpdate() {
	MENU_PTRACE("command update ");
	uint8_t list = isList(_currentParent);
	uint16_t stateHandler = pgm_read_word(
		(list ? _currentParent : getCurrent()) +
		0
		// TMENU_FIELD_COMMAND_STATE
		);
	uint8_t state = ((CommandStateHandler)stateHandler)(0);
	if (state == 0) {
		_state = list ? MENU_STATE_LIST : MENU_STATE_MENU;
	}
}

uint8_t Menu::isValueType(uint8_t* item) {
	switch (getType(item)) {
	case TMENU_UINT1:
	case TMENU_UINT8:
	case TMENU_UINT16:
	case TMENU_UINT32:
		return 1;
	}
	return 0;
}

uint8_t Menu::hasChildren(uint8_t* item){
	switch (getType(item)) {
	case TMENU_ROOT:
	case TMENU_MENU:
	case TMENU_EDITOR:
	case TMENU_STRUCT:
		return 1;
	}
	return 0;
}

void Menu::updateList() {
	MENU_PTRACE("update list ");
	MENU_TRACE(_menuCount);
	MENU_PTRACE(" ");
	uint8_t i;
	uint8_t count;
	if (_menuCount < LCD_TEXT_HEIGHT) {
		i = 0;
		count = _menuCount;
	} else {
		if (_index > (LCD_TEXT_HEIGHT >> 1)) {
			i = _index - (LCD_TEXT_HEIGHT >> 1);
			if (_menuCount <= i + LCD_TEXT_HEIGHT) {
				i = _menuCount - LCD_TEXT_HEIGHT;
			}
		} else {
			i = 0;
		}
		count = LCD_TEXT_HEIGHT;
	}
	MENU_TRACE(count);
	MENU_PTRACE(" ");
	MENU_TRACELN(i);
	uint8_t values = isValueType(_currentParent);
	uint16_t exchange;
	uint16_t offset;
	uint8_t size;
	if (values) {
		getEditor(_currentParent, exchange, offset);
		size = getEditSize(_currentParent);
		if (size == 0) {
			offset *=8;
		}
		offset += getOffset(_currentParent);
		offset += i * (size ? size : 1);
	}
	for (uint8_t row = 0; row < count; ++i, ++row) {
		display.setNum(i, 0, row * LCD_FONT_HEIGHT,
				(LCD_TEXT_WIDTH - menuValuesSize),
				(i == _index && !isStateEdit()) ? WHITE : BLACK);

		if (values) {
			uint32_t value;
			if (i == _index && isStateEdit()) {
				value = _editValue;
			} else {
				value = 0;
				((ExchangeHandler)exchange)
						((uint8_t*)&value,
								TMENU_EXCHANGE_GET,
								offset, size);
			}
			offset += size ? size : 1;
			if (value != menuHideValue) {
				display.setNum(value,
						(LCD_TEXT_WIDTH - menuValuesSize) * LCD_FONT_WIDTH,
						row * LCD_FONT_HEIGHT, menuValuesSize,
						i == _index ? WHITE : BLACK);
			}
		}
	}
}

void Menu::updateMenu() {
	uint8_t* item = _currentParent;
	item += getMenuSize(item);
	uint8_t i;
	uint8_t count;
	uint16_t exchange;
	uint16_t offset = 0;
	getEditor(_currentParent, exchange, offset);
	if (_menuCount < LCD_TEXT_HEIGHT) {
		i = 0;
		count = _menuCount;
	} else {
		if (_index > (LCD_TEXT_HEIGHT >> 1)) {
			i = _index - (LCD_TEXT_HEIGHT >> 1);
			if (_menuCount <= i + LCD_TEXT_HEIGHT) {
				i = _menuCount - LCD_TEXT_HEIGHT;
			}
			for (uint8_t j = 0; j < i; ++j) {
				item = getNext(item);
			}
		} else {
			i = 0;
		}
		count = i + LCD_TEXT_HEIGHT;
	}
	MENU_PTRACE("update menu");
	MENU_TRACE(i);
	MENU_PTRACE(" ");
	MENU_TRACELN(count);
	for (uint8_t row = 0; row < count; ++row, ++i) {
		char buffer[LCD_TEXT_WIDTH + 1];
		strncpy_P(buffer,
			 (char*)getTitle(item),
			  LCD_TEXT_WIDTH + 1);
		MENU_TRACELN(buffer);
		display.setStr(buffer,
			0,
			row * LCD_FONT_HEIGHT,
			i == _index && !isStateEdit() ? WHITE : BLACK);
		if (exchange && isValueType(item) && !isList(item)) {
			uint32_t value;
			if (i == _index && isStateEdit()) {
				value = _editValue;
			} else {
				value = 0;
				uint8_t size = getEditSize(item);
				((ExchangeHandler)exchange)(
						(uint8_t*)&value,
						TMENU_EXCHANGE_GET,
						(size ? (offset) : (offset*8)) +
							getOffset(item),
						size);
			}
			if (value != menuHideValue) {
				display.setNum(value,
						(LCD_TEXT_WIDTH - menuValuesSize) * LCD_FONT_WIDTH,
						row * LCD_FONT_HEIGHT, menuValuesSize,
						i == _index ? WHITE : BLACK);
			}
		}
		item = getNext(item);
	}
}

void Menu::updateEdit() {
}

uint8_t Menu::isList(uint8_t* item) {
	return getFlags(item) & TMENU_LIST;
}

uint8_t Menu::isLastList(uint8_t* item) {
	return (getFlags(item) &
			(TMENU_LIST | TMENU_LAST)) ==
			(TMENU_LIST | TMENU_LAST);
}

uint8_t Menu::isLastChild(uint8_t* item) {
	return getFlags(item) & TMENU_LAST;
}

uint8_t Menu::getMenuSize(uint8_t type, uint8_t flags) {
	//MENU_PTRACE("size ");
	//MENU_TRACE(type);
	//MENU_PTRACE(" ");
	//MENU_TRACELN(flags);
	return pgm_read_byte(&menuItemSize[type]) +
	 ((flags & TMENU_LIST) ? 2 : 0);
}

uint8_t Menu::getMenuSize(uint8_t* item) {
	return getMenuSize(getType(item), getFlags(item));
}

void Menu::clear() {
	display.clearDisplay(WHITE);
	display.updateDisplay();
}

void Menu::update() {
	//MENU_PTRACELN("update begin");

	display.clearDisplay(WHITE);

	if (isStateList()) {
		updateList();
	} else {
		updateMenu();
	}

	display.updateDisplay();

	//MENU_PTRACELN("update done");
}

void Menu::reset() {
	_listCount = 0;
	_state = MENU_STATE_MENU;
	setParent((uint8_t*)_root, 0);
}

void Menu::setup(const uint8_t* root) {
	_root = root;
	#ifdef USE_MENU_TEST
	trace();
	#endif
	reset();
	update();
}

uint8_t* Menu::getCurrent() {
	uint8_t* item = _currentParent;
	item += getMenuSize(item);
	for (uint8_t i = 0; i < _index; ++i) {
		item = getNext(item);
	}
	return item;
}

uint8_t* Menu::getParent(uint8_t* item) {
	if (item == _root) {
		return (uint8_t*)_root;
	}
	uint8_t* parent[TMENU_MAX_LEVEL];
	uint8_t level = 0;
	uint8_t* i = (uint8_t*)_root;
	for (;;) {
		if (i != (uint8_t*)_root) {
			//MENU_TRACE_ITEM(i, level);
		}
		if (hasChildren(i)) {
			if (level >= TMENU_MAX_LEVEL) {
				MENU_PTRACELN("error TMENU_MAX_LEVEL");
				break;
			}
			parent[level++] = i;
		} else {
			if (isLastChild(i)) {
				while(isLastChild(parent[--level]));
				if (level == 0) {
					MENU_PTRACELN("error not found");
					break;
				}
			}
		}
		i += getMenuSize(i);
		if (item == i) {
			// found
			return parent[level-1];
		}
	}

	MENU_PTRACELN("error getParent");
	return (uint8_t*)_root;
}

uint8_t* Menu::getNext(uint8_t* item) {
	//MENU_PTRACELN("get next");
	if (item == _root) {
		//MENU_PTRACELN("root");
		return 0;
	}
	//MENU_TRACE_ITEM(item, 0);
	if (isLastChild(item)) {
		//MENU_PTRACELN("last");
		return 0;
	}

	uint8_t* parent[TMENU_MAX_LEVEL];
	uint8_t level = 0;
	uint8_t* i = item;
	for (;;) {
		//MENU_TRACE_ITEM(i, level);
		if (hasChildren(i)) {
			if (level >= TMENU_MAX_LEVEL) {
				MENU_PTRACELN("error TMENU_MAX_LEVEL");
				break;
			}
			parent[level++] = i;
		} else {
			if (isLastChild(i)) {
				while(isLastChild(parent[--level]) && level > 0);
			}
		}
		i += getMenuSize(i);
		if (level == 0) {
			break;
		}
	}
	return i;
}

void Menu::setParent(uint8_t* parent, uint8_t* current) {
	MENU_PTRACELN("set parent");
	//MENU_TRACELN((int)parent);
	//MENU_TRACELN((int)current);
	if (!hasChildren(parent)) {
		// ERROR no children
		MENU_PTRACELN("ERROR no children");
		setParent((uint8_t*)_root, 0);
		return;
	}
	_currentParent = parent;
	_index = 0;
	_menuCount = 0;
	uint8_t* i = parent;
	i += getMenuSize(i);
	//MENU_TRACELN((uint16_t)i);
	//MENU_TRACELN(getFlags(i));
	do {
		MENU_TRACELN((int)i);
		if (current == i) {
			_index = _menuCount;
		}
		++_menuCount;
		i = getNext(i);
	} while (i);
	MENU_PTRACE("menu count ");
	MENU_TRACE(_menuCount);
	MENU_PTRACE(" index ");
	MENU_TRACELN(_index);
}

#ifdef TMENU_DEBUG

void Menu::trace() {
	MENU_PTRACELN("trace start");
	uint8_t* parent[TMENU_MAX_LEVEL];
	uint8_t level = 0;
	uint8_t* i = (uint8_t*)_root;
	for (;;) {
		if (i != (uint8_t*)_root) {
			MENU_TRACE_ITEM(i, level);
		}
		if (hasChildren(i)) {
			if (level >= TMENU_MAX_LEVEL) {
				MENU_PTRACELN("error TMENU_MAX_LEVEL");
				break;
			}
			parent[level++] = i;
		} else {
			if (isLastChild(i)) {
				while(isLastChild(parent[--level]));
				if (level == 0) {
					break;
				}
			}
		}
		i += getMenuSize(i);
	}
	MENU_PTRACELN("trace done");
}

void Menu::traceItem(uint8_t* item, uint8_t level) {
	if (item == _root) {
		MENU_PTRACE("ROOT");
		return;
	}
	char buffer[LCD_TEXT_WIDTH + 1];
	for (uint8_t j = 0; j < level; ++j) {
		MENU_PTRACE("  ");
	}
	strncpy_P(buffer,
		 (char*)getTitle(item),
		  LCD_TEXT_WIDTH + 1);
	buffer[LCD_TEXT_WIDTH] = 0;
	MENU_TRACELN(buffer);
}

#endif
