import React from 'react'
import './Headlines.css';

import moment from 'moment';

import sunBg from '../img/bg_sun.png'
import moonBg from '../img/bg_moon.png'



export default function Headlines({ weatherData, iconId }) {



    let weatherIcon;
    switch (iconId) {
        case '01d':
            weatherIcon = <i className="fa-solid fa-sun fa-1x"></i>
            break;
        case '01n':
            weatherIcon = <i className="fa-solid fa-moon fa-1x"></i>
            break;
        case '02d':
            weatherIcon = <i className="fa-solid fa-cloud-sun fa-1x"></i>
            break;
        case '02n':
            weatherIcon = <i className="fa-solid fa-cloud-moon fa-1x"></i>
            break;
        case '03d':
            weatherIcon = <i className="fa-solid fa-cloud fa-1x"></i>
            break;
        case '03n':
            weatherIcon = <i className="fa-solid fa-cloud fa-1x"></i>
            break;
        case '04d':
            weatherIcon = <i className="fa-solid fa-cloud fa-1x"></i>
            break;
        case '04n':
            weatherIcon = <i className="fa-solid fa-cloud fa-1x"></i>
            break;
        case '09d':
            weatherIcon = <i className="fa-solid fa-cloud-rain fa-1x"></i>
            break;
        case '09n':
            weatherIcon = <i className="fa-solid fa-cloud-rain fa-1x"></i>
            break;
        case '10d':
            weatherIcon = <i className="fa-solid fa-cloud-sun-rain fa-1x"></i>
            break;
        case '10n':
            weatherIcon = <i className="fa-solid fa-cloud-moon-rain fa-1x"></i>
            break;
        case '11d':
            weatherIcon = <i className="fa-solid fa-cloud-bolt fa-1x"></i>
            break;
        case '11n':
            weatherIcon = <i className="fa-solid fa-cloud-bolt fa-1x"></i>
            break;
        case '13d':
            weatherIcon = <i className="fa-solid fa-snowflake fa-1x"></i>
            break;
        case '13n':
            weatherIcon = <i className="fa-solid fa-snowflake fa-1x"></i>
            break;
        case '50d':
            weatherIcon = <i className="fa-solid fa-water fa-1x"></i>
            break;
        case '50n':
            weatherIcon = <i className="fa-solid fa-water fa-1x"></i>
            break;
    }

    let sunrise = new Date(weatherData.city.sunrise * 1000).toLocaleTimeString('en-gb')
    let sunset = new Date(weatherData.city.sunset * 1000).toLocaleTimeString('en-gb')
    let currentTime = moment().format('HH:mm:ss');

    let background; 
    if(currentTime > sunrise && currentTime < sunset){
         background = {
            backgroundImage: `url(${sunBg})`,
            backgroundSize: 'cover'
        }
    } else {
         background = {
            backgroundImage: `url(${moonBg})`,
            backgroundSize: 'cover'
        }
    }


  return (
    <div className="headlines-container" style={background}>
        <div className="headlines-top">
            <p className="temperature">{Math.round((Math.round(weatherData.list[0].main.temp - 273.15) * 9/5 + 32))}</p>
            <p className="farenheight">&deg;F</p>
        </div>
        <div className="headlines-middle">
            <p className="headline"><span className="weather-icon">{weatherIcon}</span> {weatherData.list[0].weather[0].main}</p>
            <p className="day">Today {moment().format('D MMMM')}</p>
        </div>
            <hr />



    </div>
  )
}
