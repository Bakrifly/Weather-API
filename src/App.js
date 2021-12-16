import React from "react";
import placeHolder from "./img/weather-icons/placeHolder.png";
import "./App.css"

const App = ()=>{
 
  return (
<div className="site-Wrapper" >

<header>

  <div className="Top-Banner">

  <form className="search-wrapper">
  <input type = "text" placeholder="Search Location..."></input>
  <button>Search</button>
  </form>

  </div>

  </header>

  <main>

  <div id="grid-container" >
    <div className="today-weather"><img src={placeHolder}></img>
   
    <p id="tempTdy">Temperature <span id ="low">10</span>°c To <span id ="High">20</span>°c</p>
    
    <p id="HP">Humidity <span id ="humidity">50</span>% &nbsp; &nbsp; &nbsp; Pressure<span id ="pressure">990.67</span>°c</p></div>
 <div class="line"></div>
    <div className="hour3"><p>03:00</p><img src={placeHolder}></img><p id="temp03">20</p></div>
    <div className="hour6"><p>06:00</p><img src={placeHolder}></img><p id="temp06">20</p></div>
    <div className="hour9"><p>09:00</p><img src={placeHolder}></img><p id="temp09">20</p></div>
    <div className="hour12"><p>12:00</p><img src={placeHolder}></img><p id="temp12">20</p></div>
    <div className="hour15"><p>15:00</p><img src={placeHolder}></img><p id="temp15">20</p></div>
    <div className="hour18"><p>18:00</p><img src={placeHolder}></img><p id="temp18">20</p></div>
    <div className="hour21"><p>21:00</p><img src={placeHolder}></img><p id="temp21">20</p></div>
  </div>

  </main>

  <footer>
    <div><p>Data Source: <a src = "https://openweathermap.org/">openweathermap.org</a> </p></div>
  </footer>
</div> )
};

export default App;
