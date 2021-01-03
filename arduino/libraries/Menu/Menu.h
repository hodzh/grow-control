/*
 * Menu.h
 *
 *  Created on: Jul 19, 2015
 *      Author: eugene
 */

#ifndef MENU_H_
#define MENU_H_

#include <Arduino.h>

#define BUTTON_UP_PIN 16
#define BUTTON_DOWN_PIN 14
#define BUTTON_LEFT_PIN 17
#define BUTTON_RIGHT_PIN 15

enum MenuItemType : uint8_t {
	TMENU_ROOT = 0, // single root
	TMENU_MENU,     // list of menu items
	TMENU_COMMAND,  // invoke command handler
	TMENU_COMMAND_ASYNC,  // invoke command starter
	TMENU_EDITOR,   // exchange handler of descendant items
	TMENU_STRUCT,   // editor sub structure
	TMENU_UINT1,    // edit bit
	TMENU_UINT8,    // edit byte
	TMENU_UINT16,   // edit word
	TMENU_UINT32    // edit two words
};

enum MenuItemFlags : uint8_t {
	TMENU_LIST = 1, // array of items
	TMENU_LAST = 2  // last child marker
};

// exchange retrieve value mode
#define TMENU_EXCHANGE_GET 0
// exchange save value mode
#define TMENU_EXCHANGE_SET 1

// value editor
// buffer - exchange data
// save - TMENU_EXCHANGE_GET or TMENU_EXCHANGE_SET
// offset - offset, in bits if size is 0, in bytes otherwise
// size - size in bytes, 0 means single bit
typedef void (*ExchangeHandler)(
	uint8_t* buffer,
	uint8_t save,
	uint16_t offset,
	uint8_t size);

// commnad handler
typedef void (*CommandHandler)(void);

// async commnad state handler
// cancel - true if user has canceled
// returns 0 if done
typedef uint8_t (*CommandStateHandler)(
		uint8_t cancel);

#define IMENU_ROOT(flags) \
	TMENU_ROOT | ((flags) << 8)

#define IMENU_MENU(flags, title) \
	TMENU_MENU | ((flags) << 8), \
	(uint16_t)(title)

#define IMENU_COMMAND(flags, title, handler) \
	TMENU_COMMAND | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)(handler)

#define IMENU_COMMAND_ASYNC(flags, title, handler, stateHandler) \
	TMENU_COMMAND | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)(handler), \
	(uint16_t)(stateHandler)

#define IMENU_EDITOR(flags, title, exchange) \
	TMENU_EDITOR | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)(exchange)

#define IMENU_STRUCT(flags, title, offset, size) \
	TMENU_STRUCT | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)(offset), \
	(uint16_t)(size)

#define IMENU_UINT1(flags, title, offset, offsetBit) \
	TMENU_UINT1 | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)((offset) * 8 + (offsetBit))

#define IMENU_UINT8(flags, title, offset, maxValue) \
	TMENU_UINT8 | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)(offset), \
	(uint8_t)(maxValue)

#define IMENU_UINT16(flags, title, offset, maxValue) \
	TMENU_UINT16 | ((flags) << 8), \
	(uint16_t)(title), \
	(uint16_t)(offset), \
	(uint16_t)(maxValue)

#define IMENU_UINT32(flags, title, offset, maxValue) \
	TMENU_UINT32 | ((flags) << 8), \
	(uint16_t)(title), \
	(uint8_t)(offset), \
	(uint16_t)(maxValue), \
	(uint16_t)((uint32_t)(maxValue) >> 8)

#define TMENU_LIST_LEVEL 2
#define TMENU_MAX_LEVEL 4

//#define TMENU_DEBUG 1

#define menuValuesSize 5
#define menuHideValue 0xffffffff
#define menuButtonUpDelay 120
#define menuButtonUpMin 50
#define menuButtonUpMax 500
#define menuButtonUpAccCountMin 5
#define menuButtonUpEditStepMax 25

enum MenuState : uint8_t {
	MENU_STATE_MENU = 0,
	MENU_STATE_EDIT,
	MENU_STATE_LIST,
	MENU_STATE_EDIT_LIST,
	MENU_STATE_COMMAND
};

class Menu {

public:

	Menu();

	void setup(const uint8_t* root);
	void loop();
	void update();
	void clear();

	uint8_t _list[TMENU_LIST_LEVEL];
	uint8_t _listCount;
	uint8_t _index;
	uint32_t _editValue;

private:

	uint8_t buttonUp(int pin);
	uint8_t waitButton(int pin);
	void buttonUpAccReset();
	uint8_t buttonUpAcc(int pin);

	void updateMenu();
	void updateList();
	void updateEdit();
	void reset();

	void moveUp();
	void moveDown();
	void moveRight();
	void moveLeft();

	void editValue(uint8_t up);
	void editExchange(uint8_t save);
	void getEditor(uint8_t* item, uint16_t& exchange, uint16_t& offset);
	void getEditor(uint8_t* item, uint16_t& exchange, uint16_t& offset, uint8_t listIndex);
	void beginEdit();
	void saveEdit();
	void endEdit();
	uint8_t isStateEdit() const;
	uint8_t isStateCommand() const;
	uint8_t isStateList() const;
	void command(uint8_t* item);
	void commandAsync(uint8_t* item);
	void commandUpdate();

	static uint8_t getMenuSize(uint8_t type, uint8_t flags);
	static uint8_t getMenuSize(uint8_t* item);
	static uint8_t getEditSize(uint8_t* item);
	static uint8_t isValueType(uint8_t* item);
	static uint8_t hasChildren(uint8_t* item);

	static uint8_t isList(uint8_t* item);
	static uint8_t isLastChild(uint8_t* item);
	static uint8_t isLastList(uint8_t* item);

	static uint8_t getListCount(uint8_t* item);

	static uint8_t getType(uint8_t* item);
	static uint8_t getFlags(uint8_t* item);
	static uint16_t getTitle(uint8_t* item);
	static uint16_t getExchange(uint8_t* item);
	static uint16_t getCommand(uint8_t* item);
	static uint16_t getOffset(uint8_t* item);
	static uint16_t getSize(uint8_t* item);
	static uint32_t getMaxValue(uint8_t* item);

	uint8_t* getParent(uint8_t* item);
	void setParent(uint8_t* item, uint8_t* current);
	uint8_t* getCurrent();
	uint8_t* getNext(uint8_t* item);

	const uint8_t* _root;
	uint8_t _state;
	uint8_t* _currentParent;
	uint8_t _menuCount;

	uint8_t menuButtonUpAccCount;
	uint16_t menuButtonUpAcc;
	uint16_t menuButtonUpEditStep;
	uint16_t menuButtonUp;
	uint8_t menuButtonUpHold;

#ifdef TMENU_DEBUG
	void trace();
	void traceItem(uint8_t* item, uint8_t level);
#endif

};

#endif /* MENU_H_ */
