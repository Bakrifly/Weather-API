import React from "react";
import placeHolder from "../img/weather-icons/placeHolder.png";
import clear from "../img/weather-icons/clear.svg"
import FakeWeather from "./fakeWeatherData.json"


function TodayWeather(props) {

    return (
<>
        <div className="today-weather">
             <img src={clear} alt="today's weather"></img>

            <p id="tempTdy">Temperature: <span id="low">{props.low}</span>°c To <span id="High">{props.high}</span>°c</p>

            <p id="HP">Humidity: <span id="humidity">{props.humidity}</span>% &nbsp; &nbsp; &nbsp; Pressure: <span id="pressure">{props.pressure}</span></p>
            </div>
           
</>)
}


export default TodayWeather

