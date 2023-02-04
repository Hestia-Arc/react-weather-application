import React from 'react'
import './Info.css'

export default function Info() {
  return (
    <div>
        <h1 className='city' id='city'>Abuja Nigeria</h1>
        <p className='date'>Updated <span id='formatDate'></span></p>
        <p id='weather'>Clouds </p>
        <p id='wind'>Wind: <span id='speed'></span>km/h</p>
    </div>
  )
}
