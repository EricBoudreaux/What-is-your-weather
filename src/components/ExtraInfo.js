import React from 'react'

import './ExtraInfo.css';

export default function ExtraInfo({ weatherData }) {

    let windDir = weatherData.list[0].wind.deg;
    let windCoord;


    switch (true) {
        case windDir > 350 && windDir < 20:
            windCoord = 'N';
            break;
        case windDir > 20 && windDir < 40:
            windCoord = 'N/NE';
            break;
        case windDir > 40 && windDir < 60:
            windCoord = 'NE';
            break;
        case windDir > 60 && windDir < 80:
            windCoord = 'E/NE';
            break;
        case windDir > 80 && windDir < 110:
            windCoord = 'E';
            break;
        case windDir > 110 && windDir < 130:
            windCoord = 'E/SE';
            break;
        case windDir > 130 && windDir < 150:
            windCoord = 'SE';
            break;
        case windDir > 150 && windDir < 170:
            windCoord = 'S/SE';
            break;
        case windDir > 170 && windDir < 200:
            windCoord = 'S';
            break;
        case windDir > 200 && windDir < 220:
            windCoord = 'S/SW';
            break;
        case windDir > 220 && windDir < 240:
            windCoord = 'SW';
            break;
        case windDir > 240 && windDir < 260:
            windCoord = 'W/SW';
            break;
        case windDir > 260 && windDir < 290:
            windCoord = 'W';
            break;
        case windDir > 290 && windDir < 310:
            windCoord = 'W/NW';
            break;
        case windDir > 310 && windDir < 330:
            windCoord = 'NW';
            break;
        case windDir > 330 && windDir < 350:
            windCoord = 'N/NW';
            break;
    }
  return (
    <div className='extra-container'>
        <div className='extra-top'>
            <div className='real-feel-container'>
                <p className='real-feel-title'>Real Feel</p>
                <p className="real-feel">{Math.round((Math.round(weatherData.list[0].main.feels_like - 273.15) * 9/5 + 32))}&deg;</p> 
            </div>
            <div className='humidity-container'>
                <p className='humidity-title'>Humidity</p>
                <p className="humidity">{weatherData.list[0].main.humidity}<span className='symbols'>%</span></p>
            </div>
        </div>
        <div className='extra-bottom'>
            <div className='wind-container'>
                <p className='wind-title'>Wind</p>
                <p className="wind">{Math.round(weatherData.list[0].wind.speed * 2.237)}<span className='symbols'>mph</span></p>
            </div>
            <div className='wind-direction-container'>
                <p className='wind-direction-title'>Wind Dir.</p>
                <p className='wind-direction'>{windCoord}</p>
            </div>
        </div>
    </div>
  )
}
