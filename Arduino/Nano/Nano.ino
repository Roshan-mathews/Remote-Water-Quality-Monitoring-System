#include <OneWire.h>
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

#include <SoftwareSerial.h>
SoftwareSerial esp(6, 5);
SoftwareSerial gpsSerial(4, 3);
#include "GravityTDS.h"
GravityTDS gravityTds;
#include <TinyGPS.h>
TinyGPS gps;
float lat = 9.893705, lon = 76.438923;
const int turbidityPin = A0;
const int tdsPin = A1;
const int phPin = A2;
const int salinityPin = A3;
float turbidityValue = 0.00;
float tdsValue = 0.00;
float phValue = 0.00;
float tempValue = 0.00;
float salinityValue = 0.00;
float ntu;
float ph_calibration_value = 21.34;
unsigned long int avgval;
int buffer_arr[10], temp;

void setup()
{
  Serial.begin(9600);
  esp.begin(115200);
  gpsSerial.begin(9600);
  sensors.begin();
  gravityTds.setPin(tdsPin);
  gravityTds.setAref(5.0);
  gravityTds.setAdcRange(1024);
  gravityTds.begin();
}
void loop()
{
  esp.print("*");
  temper();
  esp.print(":");
  salinity();
  esp.print(":");
  tds();
  esp.print(":");
  ph();
  esp.print(":");
  turbidity();
  esp.print(":");
  gps_funct();
  esp.print("#");
  delay(500);
}

void turbidity()
{
  turbidityValue = 0;
  for (int i = 0; i < 800; i++)
  {
    turbidityValue += ((float)analogRead(turbidityPin) / 1023)
    * 5;
  }
  turbidityValue = turbidityValue / 800;
  turbidityValue = round_to_dp(turbidityValue, 2);
  if (turbidityValue < 2.5)
  {
    ntu = 3000;
  }
  else
  {
    ntu = -1120.4 * square(turbidityValue) + 5742.3 *
    turbidityValue - 4353.8;
  }
  // Serial.print("Turbidity: ");
  esp.print(ntu);
  // Serial.println(" NTU");
}

float round_to_dp( float in_value, int decimal_place )
{
  float multiplier = powf( 10.0f, decimal_place );
  in_value = roundf( in_value * multiplier ) / multiplier;
  return in_value;
}

void tds()
{
  // gravityTds.setTemperature(temperature); // set the
  temperature and execute temperature compensation
  gravityTds.update(); //sample and calculate
  tdsValue = gravityTds.getTdsValue(); // then get the value
  // Serial.print("Total Dissolved Substances: ");
  esp.print(tdsValue, 0);
  // Serial.println(" ppm");
}

void ph()
{
  for (int i = 0; i < 10; i++)
  {
    buffer_arr[i] = analogRead(phPin);
    delay(30);
  }
  // for (int i = 0; i < 9; i++)
  // {
  // for (int j = i + 1; j < 10; j++)
  // {
  // if (buffer_arr[i] > buffer_arr[j])
  // {
  // temp = buffer_arr[i];
  // buffer_arr[i] = buffer_arr[j];
  // buffer_arr[j] = temp;
  // }
  // }
  // }
  avgval = 0;
  for (int i = 0; i < 10; i++)
    avgval += buffer_arr[i];
  float volt = (float)avgval /10;
  phValue = 0.0417* volt -5.0833; //0.0417x + -5.0833
  //phValue = -5.70 * volt + ph_calibration_value;
  // Serial.print("pH Val: ");
  esp.print(phValue);
  Serial.print("phValue:");
  Serial.println(phValue);
}

void temper()
{
  sensors.requestTemperatures();
  tempValue = sensors.getTempCByIndex(0);
  // Serial.print("Temperature: ");
  esp.print(tempValue);
}

void salinity()
{
  salinityValue = analogRead(salinityPin);
  salinityValue = ((salinityValue * 0.0978474) - 0.0978474)/10;
  if (salinityValue < 1)
  {
  salinityValue = 0;
  }
  // Serial.print("Salinity: ");
  esp.print(salinityValue);
  // Serial.println("%");
}
void gps_funct()
{
  while (gpsSerial.available())
  {
  if (gps.encode(gpsSerial.read()))
  {
  gps.f_get_position(&lat, &lon);
  }
  }
  String latitude = String(lat, 6);
  String longitude = String(lon, 6);
  esp.print(latitude + ":" + longitude);
}