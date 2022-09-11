import React from 'react'
import './FiveDay.css'

export default function FiveDay({ weatherData }) {

    //Day 1 weatherData.list[7]
    //Day 2 weatherData.list[15]
    //Day 3 weatherData.list[23]
    //Day 4 weatherData.list[31]
    //Day 5 weatherData.list[39]

    let dayOne = weatherData.list[7].dt_txt;
    let dayOneTemperature = Math.round((Math.round(weatherData.list[7].main.temp - 273.15) * 9/5 + 32))

    let dayTwo = weatherData.list[15].dt_txt;
    let dayTwoTemperature = Math.round((Math.round(weatherData.list[15].main.temp - 273.15) * 9/5 + 32))

    let dayThree = weatherData.list[23].dt_txt;
    let dayThreeTemperature = Math.round((Math.round(weatherData.list[23].main.temp - 273.15) * 9/5 + 32))

    let dayFour = weatherData.list[31].dt_txt;
    let dayFourTemperature = Math.round((Math.round(weatherData.list[31].main.temp - 273.15) * 9/5 + 32))

    let dayFive = weatherData.list[39].dt_txt;
    let dayFiveTemperature = Math.round((Math.round(weatherData.list[39].main.temp - 273.15) * 9/5 + 32))

  return (
    <div className='fiveDay-container'>
        <p className='fiveDay-title'>Five Day Forecast</p>
        <div className='days-container'>
        <div className='days'>
            <p className='days-temperature'>{dayOneTemperature}&deg;</p>
            <p>{dayOne.slice(5,7)}/{dayOne.slice(8,10)}</p>
        </div>
        <div className='days'>
            <p className='days-temperature'>{dayTwoTemperature}&deg;</p>
            <p>{dayTwo.slice(5,7)}/{dayOne.slice(8,10)}</p>
        </div>
        <div className='days'>
            <p className='days-temperature'>{dayThreeTemperature}&deg;</p>
            <p>{dayThree.slice(5,7)}/{dayOne.slice(8,10)}</p>
        </div>
        <div className='days'>
            <p className='days-temperature'>{dayFourTemperature}&deg;</p>
            <p>{dayFour.slice(5,7)}/{dayOne.slice(8,10)}</p>
        </div>
        <div className='days'>
            <p className='days-temperature'>{dayFiveTemperature}&deg;</p>
            <p>{dayFive.slice(5,7)}/{dayOne.slice(8,10)}</p>
        </div>
        </div>
    </div>
  )
}
