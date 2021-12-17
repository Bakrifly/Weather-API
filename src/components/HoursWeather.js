import React from "react";
import placeHolder from "../img/weather-icons/placeHolder.png";


function HoursWeather(props) {

    return (<>
        <div class="line"></div>
        <div className="hour3"><p>03:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp03">20</p></div>
        <div className="hour6"><p>06:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp06">20</p></div>
        <div className="hour9"><p>09:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp09">20</p></div>
        <div className="hour12"><p>12:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp12">20</p></div>
        <div className="hour15"><p>15:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp15">20</p></div>
        <div className="hour18"><p>18:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp18">20</p></div>
        <div className="hour21"><p>21:00</p><img src={placeHolder} alt="3-am temp"></img><p id="temp21">20</p></div>
    </>);

    
}


export default HoursWeather;