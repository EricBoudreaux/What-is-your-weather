import React from 'react'

import Headlines from './Headlines'
import LowTemp from './LowTemp'
import HighTemp from './HighTemp'
import Sunrise from './Sunrise'
import Sunset from './Sunset'
import ExtraInfo from './ExtraInfo'

import logo from '../img/logo.png'

import './Weather.css'

import moment from 'moment';
import FiveDay from './FiveDay'

const refresh = () => {
    window.location.reload()
}

const CardExampleCard = ({ weatherData, weatherIcon }) => (
    
    <div className="main">
        <div className='top-bar'>
                <img src={logo} height='25px'/>
                <p className="area-name">{weatherData.city.name}</p>
            </div>
          <div className='master-container'>  
            <Headlines weatherData={weatherData} iconId={weatherIcon}/>
            <div className="lows-highs">
                <LowTemp weatherData={weatherData} />
                <HighTemp weatherData={weatherData} />
            </div>
            <div className='sun-times'>
                <Sunrise weatherData={weatherData} />
                <Sunset weatherData={weatherData} />
            </div>
            <ExtraInfo weatherData={weatherData} />
            <FiveDay weatherData={weatherData} />
        </div>
        <div className="update">
            <button className="refresh-btn" onClick={refresh}><i className="fa-solid fa-rotate"></i></button>
            <span className="update-time">Last Updated: {moment().format('h:mm:ss a')}</span>   
        </div> 
    </div>
)

export default CardExampleCard; 

