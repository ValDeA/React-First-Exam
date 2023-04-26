import { useEffect, useState } from "react";
import DeviceList from "./main/devicelist";
import { arrJsonBase, arrJsonDeviceName, findArrayJsonKey } from '../js/base';

function Main(props) {
  const [mqtt, setMqtt] = useState(initializeMqttState(props.length));

  useEffect(() => {
    setInterval(() => {
      callApi()
        .then(res => {
          var result = new Array();
          for(var i=0; i<props.length; i++) {
            result[i] = changeMqttData(mqtt[i], res[i]);
          }
          setMqtt(result)
        })
        .catch(err => {
          setMqtt(initializeMqttState(props.length))
        });
    }, 2000);
  }, [])

  function changeMqttData(oldJson, newJson) {
    try {
      if(oldJson.SN == newJson.SN){
        newJson["name"] = oldJson["name"];
        return newJson;
      } else {
        return oldJson;
      }
    } catch (e) {
      return oldJson;
    }
  }
  function pushJsonNameKey(json, i) {
    var serialNumber = new Array();
    var serial = String(i + 1);

    serial = serial.padStart(4, '0');
    serialNumber = "NBOHEL" + serial;

    var findJson = findArrayJsonKey(arrJsonDeviceName, serialNumber);
    json.SN = findJson.SN;
    json.name = findJson.name;

    return json;
  }
  function initializeMqttState(length) {
    var mqtt = new Array();
    for (var i = 0; i < length; i++) {
      mqtt[i] = JSON.parse(JSON.stringify(arrJsonBase));
      pushJsonNameKey(mqtt[i], i);
    }
    return mqtt;
  }
  async function callApi() {
    const res = await fetch('http://192.168.0.149:8080/sensor');
    const body = await res.json();
    return body;
  }

  return (
    <div className="main">
      <DeviceList mqtt={mqtt} />
    </div>
  );
}

export default Main;
