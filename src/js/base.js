export function findArrayJsonKey(arrJson, findKey) {
  var findedJson;
  arrJson.forEach(json => {
    if(json.SN == findKey) {
      findedJson = json;
    } 
  });

  return findedJson;
}

export const arrJsonBase = {
  "SN": 0,
  "Temp": 1,
  "Hum":  1,
  "PM10": 0,
  "PM2.5":0,
  "TVOC": 0,
  "CO2":  0,
  "CH2O": 0,
  "PM10Q":0,
  "PM2.5Q":0,
  "TVOCQ":0,
  "CO2Q": 0,
  "CH2OQ":0,
  "UVC":  1,
  "FAN":  1,
  "PLA":  1
}

export const arrJsonDeviceName = [
  { name:"현대01", SN:"NBOHEL0001" },
  { name:"현대02", SN:"NBOHEL0002" },
  { name:"현대03", SN:"NBOHEL0003" },
  { name:"현대04", SN:"NBOHEL0004" },
  { name:"현대05", SN:"NBOHEL0005" },
  { name:"현대06", SN:"NBOHEL0006" },
  { name:"현대07", SN:"NBOHEL0007" },
  { name:"현대08", SN:"NBOHEL0008" },
  { name:"현대09", SN:"NBOHEL0009" },
  { name:"현대10", SN:"NBOHEL0010" },
  { name:"현대11", SN:"NBOHEL0011" },
  { name:"현대12", SN:"NBOHEL0012" },
  { name:"현대13", SN:"NBOHEL0013" },
  { name:"현대14", SN:"NBOHEL0014" },
  { name:"현대15", SN:"NBOHEL0015" },
  { name:"현대16", SN:"NBOHEL0016" },
  { name:"현대17", SN:"NBOHEL0017" },
  { name:"현대18", SN:"NBOHEL0018" },
  { name:"현대19", SN:"NBOHEL0019" },
  { name:"현대20", SN:"NBOHEL0020" },
  { name:"현대21", SN:"NBOHEL0021" },
  { name:"현대22", SN:"NBOHEL0022" },
  { name:"현대23", SN:"NBOHEL0023" },
  { name:"현대24", SN:"NBOHEL0024" },
  { name:"현대25", SN:"NBOHEL0025" },
  { name:"현대26", SN:"NBOHEL0026" },
  { name:"현대27", SN:"NBOHEL0027" },
  { name:"현대28", SN:"NBOHEL0028" },
  { name:"현대29", SN:"NBOHEL0029" },
  { name:"현대30", SN:"NBOHEL0030" },
  { name:"현대31", SN:"NBOHEL0031" },
  { name:"현대32", SN:"NBOHEL0032" },
  { name:"현대33", SN:"NBOHEL0033" },
  { name:"현대34", SN:"NBOHEL0034" },
  { name:"현대35", SN:"NBOHEL0035" },
  { name:"현대36", SN:"NBOHEL0036" },
  { name:"현대37", SN:"NBOHEL0037" },
  { name:"현대38", SN:"NBOHEL0038" },
  { name:"현대39", SN:"NBOHEL0039" },
  { name:"현대40", SN:"NBOHEL0040" },
  { name:"현대41", SN:"NBOHEL0041" },
  { name:"현대42", SN:"NBOHEL0042" },
  { name:"현대43", SN:"NBOHEL0043" },
  { name:"현대44", SN:"NBOHEL0044" },
  { name:"현대45", SN:"NBOHEL0045" },
  { name:"현대46", SN:"NBOHEL0046" },
  { name:"현대47", SN:"NBOHEL0047" },
  { name:"현대48", SN:"NBOHEL0048" },
  { name:"현대49", SN:"NBOHEL0049" },
  { name:"현대50", SN:"NBOHEL0050" }
]