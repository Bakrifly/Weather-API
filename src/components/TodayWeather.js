import React from "react";
import clear from "../img/weather-icons/clear.svg"
import cloudy from "../img/weather-icons/cloudy.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import unknown from "../img/weather-icons/unknown.svg"


function TodayWeather(props) {
console.log(props)
const Values = props.data[0].main

// weather icon checker function----- 
let ID = props.data[0].weather[0].id

console.log({ID})
 
// const selectIcon = (id) => {
//         if (id < 300) { storm }
//         else if (id <= 300 && id >= 499) { drizzle }
//         else if (id <= 500 && id >= 599) { rain }
//         else if (id <= 600 && id >= 699) { snow }
//         else if (id <= 700 && id >= 799) { fog }
//         else if (id = 800) { clear }
//         else if (id = 801) { partlycloudy }
//         else if (id < 801 && id >= 805) { mostlyCloudy }
//         else {<div></div>}
//     }


    return (
<>

        <div className="today-weather">
             <img src={rain} alt="today's weather"></img>

            <p id="tempTdy">Temperature: <span id="low">{Math.round(Values.temp_min)}</span>°c To <span id="High">{Math.round(Values.temp_max)}</span>°c</p>

            <p id="HP">Humidity: <span id="humidity">{Values.humidity}</span>% &nbsp; &nbsp; &nbsp; Pressure: <span id="pressure">{Values.pressure}</span></p>
            </div>
           
</>)
}


export default TodayWeather

