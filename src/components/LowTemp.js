import React from 'react'

import './LowTemp.css';

export default function LowTemp({ weatherData }) {
  return (
    <div className="low-temp-container">
        <div className='low-temp-top'>
            <i className="fa-solid fa-temperature-empty fa-2x"></i>
            <p className='low-title'>Low</p>
        </div>
    <div className='low-temp-bottom'>
        <p className='low-temp'>{Math.round((Math.round(weatherData.list[0].main.temp_min - 273.15) * 9/5 + 32))}&deg;</p>
    </div>
    </div>
  )
}
