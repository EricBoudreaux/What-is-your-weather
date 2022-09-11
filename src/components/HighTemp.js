import React from 'react'

import './HighTemp.css';

export default function HighTemp({ weatherData }) {
  return (
    <div className="high-temp-container">
        <div className='high-temp-top'>
            <i className="fa-solid fa-temperature-full fa-2x"></i>
            <p className='high-title'>High</p>
        </div>
        <div className='high-temp-bottom'>
            <p className="high-temp">{Math.round((Math.round(weatherData.list[0].main.temp_max - 273.15) * 9/5 + 32))}&deg;</p>
        </div>
    </div>
  )
}
