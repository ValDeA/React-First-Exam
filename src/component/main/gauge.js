import GaugeChart from 'react-gauge-chart';

function Gauge(props) {
  const info = props.info;
  const atom = props.atom;
  const tick = props.tick;
  const color = ['#9999ff', '#99ff99', '#ff9900', '#ff0000'];
  const needleColor = "#aaaaaa";

  const maxTick = sumTick(tick);
  let percentAtom = calcPercent(atom, maxTick);

  const chartStyle = {
    height: 180,
  }

  function sumTick(tick) {
    var maxTick = 0;

    tick.forEach(val => {
      maxTick += val;
    });

    return maxTick;
  }
  function calcPercent(atom, maxTick) {
    var percent = atom / maxTick;

    if(percent >= 1) return 1;
    else return percent;
  }

  return (
    <GaugeChart
      style={chartStyle}
      id={info.SN}
      arcsLength={tick}
      colors={color}
      needleColor={needleColor}
      cornerRadius={10}
      arcWidth={0.25}
      arcPadding={0.03}
      nrOfLevels={4}
      percent={percentAtom}
      hideText={true}
    />
  );
}

export default Gauge;
