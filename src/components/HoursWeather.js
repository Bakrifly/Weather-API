import React from "react";
import placeHolder from "../img/weather-icons/placeHolder.png";
import clear from "../img/weather-icons/clear.svg"
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import unknown from "../img/weather-icons/unknown.svg"


function HoursWeather(props) {

    return (<>
        <div className="line"></div>
        <div className="hour3"><p>03:00</p><img src={clear} alt="3-am temp"></img><p id="temp03">{props.temp.list[5].main.temp}</p></div>
        <div className="hour6"><p>06:00</p><img src={cloudy} alt="3-am temp"></img><p id="temp06">{props.temp.list[6].main.temp}</p></div>
        <div className="hour9"><p>09:00</p><img src={fog} alt="3-am temp"></img><p id="temp09">{props.temp.list[7].main.temp}</p></div>
        <div className="hour12"><p>12:00</p><img src={rain} alt="3-am temp"></img><p id="temp12">{props.temp.list[8].main.temp}</p></div>
        <div className="hour15"><p>15:00</p><img src={rain} alt="3-am temp"></img><p id="temp15">{props.temp.list[9].main.temp}</p></div>
        <div className="hour18"><p>18:00</p><img src={storm} alt="3-am temp"></img><p id="temp18">{props.temp.list[10].main.temp}</p></div>
        <div className="hour21"><p>21:00</p><img src={drizzle} alt="3-am temp"></img><p id="temp21">{props.temp.list[11].main.temp}</p></div>
    </>);

    
}


export default HoursWeather;