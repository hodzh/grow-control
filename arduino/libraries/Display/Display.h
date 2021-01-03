#ifndef DISPLAY_H
#define DISPLAY_H

#include <Arduino.h>

/* 84x48 LCD Defines: */
#define LCD_WIDTH   84 // Note: x-coordinates go wide
#define LCD_HEIGHT  48 // Note: y-coordinates go high
#define LCD_FONT_WIDTH 6
#define LCD_FONT_HEIGHT 8
#define LCD_TEXT_WIDTH 14 // height / font height
#define LCD_TEXT_HEIGHT 6 // height / font height
#define WHITE       0  // For drawing pixels. A 0 draws white.
#define BLACK       1  // A 1 draws black.

/* Pin definitions:
 Most of these pins can be moved to any digital or analog pin.
 DN(MOSI)and SCLK should be left where they are (SPI pins). The
 LED (backlight) pin should remain on a PWM-capable pin. */
#define scePin 7   // SCE - Chip select, pin 3 on LCD.
#define rstPin 6   // RST - Reset, pin 4 on LCD.
#define dcPin 5    // DC - Data/Command, pin 5 on LCD.
#define sdinPin 11  // DN(MOSI) - Serial data, pin 6 on LCD.
#define sclkPin 13  // SCLK - Serial clock, pin 7 on LCD.
#define blPin 9    // LED - Backlight LED, pin 8 on LCD.

//#define DISPLAY_USE_PROGMEM

class Display {
public:
	Display();

	// Because I keep forgetting to put bw variable in when setting...
	void setup();

	// Because I keep forgetting to put bw variable in when setting...
	void setPixel(int x, int y);

	void clearPixel(int x, int y);

	// This function sets a pixel on displayMap to your preferred
	// color. 1=Black, 0= white.
	void setPixel(int x, int y, boolean bw);

	// setLine draws a line from x0,y0 to x1,y1 with the set color.
	// This function was grabbed from the SparkFun ColorLCDShield
	// library.
	void setLine(int x0, int y0, int x1, int y1, boolean bw);

	// setRect will draw a rectangle from x0,y0 top-left corner to
	// a x1,y1 bottom-right corner. Can be filled with the fill
	// parameter, and colored with bw.
	// This function was grabbed from the SparkFun ColorLCDShield
	// library.
	void setRect(int x0, int y0, int x1, int y1, boolean fill, boolean bw);

	// setCircle draws a circle centered around x0,y0 with a defined
	// radius. The circle can be black or white. And have a line
	// thickness ranging from 1 to the radius of the circle.
	// This function was grabbed from the SparkFun ColorLCDShield
	// library.
	void setCircle(int x0, int y0, int radius, boolean bw, int lineThickness);

	// This function will draw a char (defined in the ASCII table
	// near the beginning of this sketch) at a defined x and y).
	// The color can be either black (1) or white (0).
	void setChar(char character, int x, int y, boolean bw);

	// setStr draws a string of characters, calling setChar with
	// progressive coordinates until it's done.
	// This function was grabbed from the SparkFun ColorLCDShield
	// library.
	void setStr(const char * dString, int x, int y, boolean bw);

	void setNum(uint32_t i, int x, int y, byte maxDigits, boolean bw);

	// This function clears the entire display either white (0) or
	// black (1).
	// The screen won't actually clear until you call updateDisplay()!
	void clearDisplay(boolean bw);

	// Helpful function to directly command the LCD to go to a
	// specific x,y coordinate.
	void gotoXY(int x, int y);

	// This will actually draw on the display, whatever is currently
	// in the displayMap array.
	void updateDisplay();

	// Set contrast can set the LCD Vop to a value between 0 and 127.
	// 40-60 is usually a pretty good range.
	void setContrast(byte contrast);

	/* There are two ways to do this. Either through direct commands
	 to the display, or by swapping each bit in the displayMap array.
	 We'll leave both methods here, comment one or the other out if
	 you please. */
	void invertDisplay();

	// There are two memory banks in the LCD, data/RAM and commands.
	// This function sets the DC pin high or low depending, and then
	// sends the data byte
	void LCDWrite(byte data_or_command, byte data);
	// This sends the magical commands to the PCD8544
	void lcdBegin(void);

	/* The displayMap variable stores a buffer representation of the
	 pixels on our display. There are 504 total bits in this array,
	 same as how many pixels there are on a 84 x 48 display.

	 Each byte in this array covers a 8-pixel vertical block on the
	 display. Each successive byte covers the next 8-pixel column over
	 until you reach the right-edge of the display and step down 8 rows.

	 To update the display, we first have to write to this array, then
	 call the updateDisplay() function, which sends this whole array
	 to the PCD8544.

	 Because the PCD8544 won't let us write individual pixels at a
	 time, this is how we can make targeted changes to the display. */
	byte displayMap[LCD_WIDTH * LCD_HEIGHT / 8];
};

#endif /* DISPLAY_H */
