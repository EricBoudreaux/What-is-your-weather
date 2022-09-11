import React from 'react'

import './Sunset.css';


export default function Sunset({ weatherData }) {
  return (
    <div className='sunset-container'>
        <div className='sunset-top'>
            <i className="fa-solid fa-moon fa-2x"></i>
            <p className='sunset-title'>Sunset</p>
        </div>
        <div className='sunset-bottom'>
            <p className="sunset">{new Date(weatherData.city.sunset * 1000).toLocaleTimeString('en-in')}</p>
        </div>
    </div>
  )
}
