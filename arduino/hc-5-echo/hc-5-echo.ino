#include <SoftwareSerial.h>

//SoftwareSerial mySerial(10, 11); // RX, TX
#define mySerial Serial3
void setup() {
  Serial.begin(38400);
  // Serial.println("ready");
  mySerial.begin(9600);
}

void loop()
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
