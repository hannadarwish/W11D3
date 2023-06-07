import ReactSlider from "react-slider";
import './Thermometer.css';
import { ClimateContext } from "../../context/ClimateContext";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Thermometer() {
  const {temp,setTemp} = useClimate();
  const [desiredTemp,setdesiredTemp] = useState();
  // useEffect( () => {
  //   while(temp < desiredTemp){
  //     setTimeout(setTemp(temp + 1),1000)
  //   }

  // },[desiredTemp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: x°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(val) => {setTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;