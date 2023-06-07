import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName } = useTheme();

  if (themeName === "day") {
    return (
      <section>
        <img  className='greenhouse-img'
              src={dayImage}
              alt='greenhouse' 
        />
        <LightSwitch />
        <ClimateStats />
      </section>
    );
  } else {
    return (
      <section>
        <img  className='greenhouse-img'
              src={nightImage}
              alt='greenhouse' 
        />
        <LightSwitch />
        <ClimateStats />
      </section>
    );
  }
}

export default Greenhouse;