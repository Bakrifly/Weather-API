import React from "react";
import placeHolder from "./img/weather-icons/placeHolder.png"


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
  <div className="grid-container">
    <div className="today-weather"><img src={placeHolder}></img></div>
    <div className="hour3"><p>03:00</p><img src={placeHolder}></img></div>
    <div className="hour6"><p>06:00</p><img src={placeHolder}></img></div>
    <div className="hour9"><p>09:00</p><img src={placeHolder}></img></div>
    <div className="hour12"><p>12:00</p><img src={placeHolder}></img></div>
    <div className="hour15"><p>15:00</p><img src={placeHolder}></img></div>
    <div className="hour18"><p>18:00</p><img src={placeHolder}></img></div>
    <div className="hour21"><p>21:00</p><img src={placeHolder}></img></div>
  </div>
  </main>
  <footer>
    <div><p>Data Source: <a src = "https://openweathermap.org/">openweathermap.org</a> </p></div>
  </footer>
</div> )
};

export default App;
