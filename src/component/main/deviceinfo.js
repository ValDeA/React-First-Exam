import { Card, CardActionArea, CardContent } from '@material-ui/core';
import Gauge from './gauge';

function DeviceInfo(props) {
  const json = props.json;

  return (
    <div className="devicelist">
      <Card className="device">
        <CardActionArea>
          <p className="device-header"> {json["SN"]} </p>
          <CardContent className="device-content">
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

          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default DeviceInfo;
