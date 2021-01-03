#include "SerialLog.h"

SerialLog::SerialLog() {
}

void SerialLog::println_p(const char* str) {
    char s[LOG_STRING_MAX_SIZE];
    strncpy_P(s, str, LOG_STRING_MAX_SIZE);
    s[LOG_STRING_MAX_SIZE-1] = '\0';
    Serial.println(s);
}

void SerialLog::print_p(const char* str) {
    char s[LOG_STRING_MAX_SIZE];
    strncpy_P(s, str, LOG_STRING_MAX_SIZE);
    s[LOG_STRING_MAX_SIZE-1] = '\0';
    Serial.print(s);
}
