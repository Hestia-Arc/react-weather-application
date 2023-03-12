import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

// components
import Forecast from "./components/Forecast";
import Source from "./components/Source";
import FormatDate from './components/FormatDate';
import WeatherIcon from './components/WeatherIcon'

function App() {

  let [data, setData] = useState({});
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState('Tokyo');

  function handleResponse(response) {
      // console.log(response.data);
      setData({
        date: new Date(response.data.dt * 1000),
        icon:  
        response.data.weather[0].icon,
        // 'http://openweathermap.org/img/wn/10d@2x.png',
        temp: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        description: response.data.weather[0].description,
        coords: response.data.coord
      });
      
      setReady(true);
  }

  function pickCity(event) {
      setCity(event.target.value);
  }

  function handleForm(event) {
      event.preventDefault();
      search();
  }

  function search() {
    const apiKey = '1c7c2130c641449415ec3a6426b1d986';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  
  if (ready) {

  return (
    <div className="app">
      
      {/* Search */}
      <div>
          <div className="input-group mb-3">
            <form onSubmit={handleForm}>
                <div class="input-group mb-3">
                  <input type="text" 
                  class="form-control input" 
                  placeholder="Search a city" 
                  aria-label="Search a city" 
                  aria-describedby="button-addon2"
                  onChange={pickCity}
                  />

                  <button class="btn btn-outline-secondary button-Up" 
                  type="submit" id="button-addon2">Search</button>
                </div>
            </form>
          </div>
      </div>

      
      {/* Info */}
      <div className='info-container'>
        <h1 className='city'>{data.city}</h1>
        <p className='date'><FormatDate date={data.date}/></p>
        <p className='weather'>{data.description} </p>
        <p className='wind'>Wind: {data.wind}km/h</p>
      </div>

    {/* Temp */}
      <div className="degree">
        {/* <span>{data.icon}</span> */}
          <WeatherIcon code={data.icon}/>
          <div>{Math.round(data.temp)}</div>°
          <sup>
            <span className="letters">
              <span>C|</span>
              <span>F</span>
            </span>
          </sup>
      </div>


      <hr />
      <Forecast value={data.coords}/>
      <hr />
      <Source />
  </div>
  );
}
 else {
  
  search();
  return 'Wait!...loading up';
}

}
export default App;
