import React from 'react'

import './Sunrise.css';

export default function Sunrise({ weatherData }) {
  return (
    <div className='sunrise-container'>
        <div className='sunrise-top'>
            <i className="fa-solid fa-sun fa-2x"></i>
            <p className='sunrise-title'>Sunrise</p>
        </div>
        <div className='sunrise-bottom'>
            <p className="sunrise">{new Date(weatherData.city.sunrise * 1000).toLocaleTimeString('en-in')}</p>
        </div>
    </div>
  )
}
