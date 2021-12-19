import React from "react";
import clear from "../img/weather-icons/clear.svg"


function TodayWeather(props) {
console.log(props)
const Values = props.data[0].main

    return (
<>
        <div className="today-weather">
             <img src={clear} alt="today's weather"></img>

            <p id="tempTdy">Temperature: <span id="low">{Math.round(Values.temp_min)}</span>°c To <span id="High">{Math.round(Values.temp_max)}</span>°c</p>

            <p id="HP">Humidity: <span id="humidity">{Values.humidity}</span>% &nbsp; &nbsp; &nbsp; Pressure: <span id="pressure">{Values.pressure}</span></p>
            </div>
           
</>)
}


export default TodayWeather

