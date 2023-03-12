import React, { useState } from "react";
import '../App.css'
import axios from 'axios'


export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
      setForecast(response.data.daily);
      console.log(response.data)
      setLoaded(true);
    }

    if (loaded) {

      return ( 
        <div className="forecast" >
    
            {/* 1 */}
            <div className="box">
                <span className="f-tag">Mon</span>
                <img src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}.png`} alt='icon' className="f-icon"/>
                <div className="f-temp-container">
                    <span>{Math.round(forecast[0].temp.max)}</span> 
                    <span>{Math.round(forecast[0].temp.min)}</span>  
                </div>
            </div>
    
            {/* 2 */}
            <div className="box">
                <span className="f-tag">TUE</span>
                <img src={`http://openweathermap.org/img/wn/${forecast[1].weather[0].icon}.png`} alt='icon' className="f-icon"/>
                <div className="f-temp-container">
                    <span>{Math.round(forecast[1].temp.max)}</span> 
                    <span>{Math.round(forecast[1].temp.min)}</span>  
                </div>
            </div>
    
    
            {/* 3 */}
            <div className="box">
                <span className="f-tag">WED</span>
                <img src={`http://openweathermap.org/img/wn/${forecast[2].weather[0].icon}.png`} alt='icon' className="f-icon"/>
                <div className="f-temp-container">
                    <span>{Math.round(forecast[2].temp.max)}</span> 
                    <span>{Math.round(forecast[2].temp.min)}</span>  
                </div>
            </div>
    
            {/* 4 */}
            <div className="box">
                <span className="f-tag">THU</span>
                <img src={`http://openweathermap.org/img/wn/${forecast[3].weather[0].icon}.png`} alt='icon' className="f-icon"/>
                <div className="f-temp-container">
                    <span>{Math.round(forecast[3].temp.max)}</span> 
                    <span>{Math.round(forecast[3].temp.min)}</span>  
                </div>
            </div>
    
            {/* 5 */}
            <div className="box">
                <span className="f-tag">FRI</span>
                <img src={`http://openweathermap.org/img/wn/${forecast[4].weather[0].icon}.png`} alt='icon' className="f-icon"/>
                <div className="f-temp-container">
                    <span>{Math.round(forecast[4].temp.max)}</span> 
                    <span>{Math.round(forecast[4].temp.min)}</span>  
                </div>
            </div>
    
        </div>
      );
    
    
    } else {

      const apiKey = '1c7c2130c641449415ec3a6426b1d986';
    let lat = props.value.lat;
    let lon = props.value.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return 'Loading';

  }
}
