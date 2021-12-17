import React from "react";
import placeHolder from "../img/weather-icons/placeHolder.png";



function TodayWeather() {

    return (
<>
        <div className="today-weather">
             <img src={placeHolder} alt="today's weather"></img>

            <p id="tempTdy">Temperature <span id="low">10</span>°c To <span id="High">20</span>°c</p>

            <p id="HP">Humidity <span id="humidity">50</span>% &nbsp; &nbsp; &nbsp; Pressure<span id="pressure">990.67</span>°c</p>
            </div>
           
</>)
}


export default TodayWeather

