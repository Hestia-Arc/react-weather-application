import React from "react";
import '../App.css'
import axios from 'axios'

export default function Forecast(props) {

    function handleResponse(response) {
      console.log(response.data);
    }

    const apiKey = '1c7c2130c641449415ec3a6426b1d986';
    let lat = props.value.lat;
    let lon = props.value.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


  return ( 
    <div className="forecast" >

        {/* 1 */}
        <div className="box">
            <span>Mon</span>
            <span>Icon</span>
            <span>temps</span>
        </div>

        {/* 2 */}
        <div className="box">
            <span>Mon</span>
            <span>Icon</span>
            <span>temps</span>
        </div>


        {/* 3 */}
        <div className="box">
            <span>Mon</span>
            <span>Icon</span>
            <span>temps</span>
        </div>

        {/* 4 */}
        <div className="box">
            <span>Mon</span>
            <span>Icon</span>
            <span>temps</span>
        </div>

        {/* 5 */}
        <div className="box">
            <span>Mon</span>
            <span>Icon</span>
            <span>temps</span>
        </div>

    </div>
  );
}
