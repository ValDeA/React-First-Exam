import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { useState } from 'react';
import Gauge from './gauge';
import sensor_on from '../../img/sensor_on.png';
import sensor_off from '../../img/sensor_off.png';

function DeviceList(props) {
  const recvMqttData = props.mqtt;
  const [index, setIndex] = useState(0);
  const [bool, setBool] = useState(false);

  function onoffColor(className, grade) {
    var classes = className + " ";
    switch (grade) {
      case 0:
        classes += "on";
        break;
      case 1:
        classes += "off";
        break;
      default:
        break;
    }
    return classes;
  }
  function sensorColor(className, grade) {
    var classes = className + " ";
    switch (grade) {
      case 0:
        classes += "blue";
        break;
      case 1:
        classes += "red";
        break;
      default:
        break;
    }
    return classes;
  }
  function pmColor(className, grade) {
    var classes = className + " ";
    switch (grade) {
      case 0:
        classes += "blue";
        break;
      case 1:
        classes += "green";
        break;
      case 2:
        classes += "yellow";
        break;
      case 3:
        classes += "red";
        break;
      default:
        break;
    }
    return classes;
  }

  function sensorStatus(bool) {
    if(bool == true) {
      return (
        <img className="sensorState" src={sensor_on} />
      )
    } else {
      return (
        <img className="sensorState" src={sensor_off} />
      )
    }
  }
  function fCreateDeviceList(data) {
    data.sort(function (a, b) {
      try {
        return a.SN.substr(-4, 4) < b.SN.substr(-4, 4) ? -1 : a.SN.substr(-4, 4) > b.SN.substr(-4, 4) ? 1 : 0;
      } catch (e) { }
    });
    return data.map(function (json, i) {
      return (
        <Card className="device" onClick={() => {setIndex(i); setBool(true);}}>
          <CardActionArea>
            <p className="device-header"> {json["name"]} </p>
            <CardContent className="device-content">
              <div className="sensor">
                <div className={onoffColor("sensorTop", json["FAN"])}>
                  FAN
                </div>
                <div className={onoffColor("sensorTop", json["UVC"])}>
                  UVC
                </div>
                <div className={onoffColor("sensorTop", json["PLA"])}>
                  PLA
                </div>
              </div>
              <div className="sensor">
                <div className={pmColor("sensorBottom", json["PM2.5Q"])}>
                  PM2.5
                </div>
                <div className={sensorColor("sensorBottom", json["TVOCQ"])}>
                  TVOC
                </div>
                <div className={sensorColor("sensorBottom", json["CO2Q"])}>
                  CO2
                </div>
                <div className={sensorColor("sensorBottom", json["CH2OQ"])}>
                  CH2O
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    })
  }
  function fCreateDeviceInformation(json, bVisibleFlag) {
    var classes;
    if(bVisibleFlag == false) classes = "info";
    else classes = "info visible";

    try {
      return (
        <Card className={classes}>
          <CardActionArea className="info-content">
            <span class="close" onClick={() => setBool(false)}>&times;</span>
            <p className="info-header"> {json["name"]} </p>
            <CardContent>
              <div className="arcGauge">
                <Gauge info={json} atom={json["PM10"]} tick={[30, 50, 70, 30]} />
                <p className="gaugeText">{json["PM10"]}</p>
                <p className="gaugeText">PM10</p>
              </div>
              <div className="arcGauge">
                <Gauge info={json} atom={json["PM2.5"]} tick={[15, 20, 40, 15]} />
                <p className="gaugeText">{json["PM2.5"]}</p>
                <p className="gaugeText">PM2.5</p>
              </div>
              <div className="arcGauge">
                <Gauge info={json} atom={json["TVOC"]} tick={[500, 500]} />
                <p className="gaugeText">{json["TVOC"]}</p>
                <p className="gaugeText">TVOC</p>
              </div>
              <div className="arcGauge">
                <Gauge info={json} atom={json["CO2"]} tick={[1000, 1000]} />
                <p className="gaugeText">{json["CO2"]}</p>
                <p className="gaugeText">CO2</p>
              </div>
              <div className="arcGauge">
                <Gauge info={json} atom={json["CH2O"]} tick={[100, 100]} />
                <p className="gaugeText">{json["CH2O"]}</p>
                <p className="gaugeText">CH2O</p>
              </div>
              <div className="arcGauge">
                <p className="sensorText">Temp :  { json["Temp"] } °C </p>
                <p className="sensorText">Hum : { json["Hum"] } % </p>
                <p className="sensorText">UVC : {sensorStatus(json["UVC"])}</p>
                <p className="sensorText">PLA : {sensorStatus(json["PLA"])}</p>
                <p className="sensorText">FAN : {sensorStatus(json["FAN"])}</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    } catch (e) { }

  }

  return (
    <div className="devicelist">
      { fCreateDeviceList(recvMqttData)}
      { fCreateDeviceInformation(recvMqttData[index], bool) }
    </div>
  );
}

export default DeviceList;
