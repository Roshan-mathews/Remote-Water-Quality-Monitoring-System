#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <FirebaseESP8266.h>

// -----------------firebase section start
#define DATABASE_URL "water-quality-6bd52-default-rtdb.firebaseio.com"
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;


// -----------------firebase section end
// String userName = "SensorData";
unsigned long lastTime = 0;
unsigned long timerDelay = 5000;
String dataHolder = "";
// String temperature , acVoltage , dcVoltage , pirVal ;
// void split(String string_to_split);
#ifndef BUILTIN_LED
#define BUILTIN_LED 2 // backward compatibility
#endif
//Your wifi name
const char* ssid = "Atls";
//Your wifi password
const char* password = "12345678";
String data = "";
bool startBit = LOW;

void setup()
{
  // delay(1000);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected");
  Serial.println();
  pinMode(BUILTIN_LED, OUTPUT);
  pinMode(13, INPUT);
  // -----firebase start
  /* Assign the certificate file (optional) */
  //config.cert.file = "/cert.cer";
  //config.cert.file_storage = StorageType::FLASH;
  /* Assign the database URL(required) */
  config.database_url = DATABASE_URL;
  config.signer.test_mode = true;
  Firebase.reconnectWiFi(true);
  /* Initialize the library with the Firebase authen and config
  */
  Firebase.begin(&config, &auth);
  // -----firebase end
}

void loop()
{
  // ---firebase start
  // sendHumidityTemperature();
  // ---firebase end
  while (Serial.available())
  {
    char c = Serial.read();
    // Serial.print(c);
    if ( (c == '*') && (startBit == LOW) )
    {
      startBit = HIGH;
      data = "";
    }
    if (c == '#')
    {
      splitString(data);
      data = "";
      startBit = LOW;
    }
    if ( (startBit == HIGH) && (c != '*') && (c != '#') )
    {
      data += c;
    }
  }
}

void splitString(String _data_to_split)
{
  Serial.println( _data_to_split);
  String temperature ;
  String sanity;
  String tds;
  String ph;
  String turbidity;
  String latitude;
  String longitude;
  int _splitter_counter = 0;
  String _value_load_array[7];
  for (int i = 0; i < _data_to_split.length() ; i++ )
  {
    if ( _data_to_split[i] == ':' ) {
      _splitter_counter++;
    }
    else {
      _value_load_array[_splitter_counter] += _data_to_split[i];
    }
  }
  pushDataWithTimestamp( "/" , _value_load_array[0] ,
  _value_load_array[1], _value_load_array[2],
  _value_load_array[3], _value_load_array[4],
  _value_load_array[5], _value_load_array[6] );
  // *1:2:3:4:5:6:7#
}

void sendHumidityTemperature()
{
  float h = 1.1;
  float t = 2.2;
  String hStr = String(h);
  String tStr = String(t);
  String turbidityStr = String(t);
  pushDataWithTimestamp( "/" , tStr , "12", "13", "14", "15",
  "16", "17" );
  // String path , String temperature ,String sanity, String
  tds, String ph, String turbidity, String latitude, String
  longitude
  // Serial.print("Current humidity = ");
  // Serial.print(h);
  // Serial.print("% ");
  // Serial.print("temperature = ");
  // Serial.print(t);
  // Serial.println("C ");
  // delay(500);
}

void pushDataWithTimestamp( String path , String temperature ,
String sanity, String tds, String ph, String turbidity, String
latitude, String longitude )
{
  if (Firebase.ready())
  {
    FirebaseJson json;
    json.set("SensorData/sanity", sanity );
    json.set("SensorData/temperature", temperature);
    json.set("SensorData/tds", tds);
    json.set("SensorData/ph", ph);
    json.set("SensorData/turbidity", turbidity);
    json.set("SensorData/latitude", latitude);
    json.set("SensorData/longitude", longitude);
    //now we will set the timestamp value at Ts
    // json.set("Ts/.sv", "timestamp");
    // .sv is the required place holder for sever value which
    currently supports only string "timestamp" as a value
    //Set data with timestamp
    if (Firebase.setJSON(fbdo, path, json))
    {
    }
    else {
    }
  }
}
// temperature
// sanity
// tds
// ph
// turbidity
// latitude
// longitud