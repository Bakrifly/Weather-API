import React from "react";
import SearchBar from "./components/SearchBar";
import TodayWeather from "./components/TodayWeather";
import HoursWeather from "./components/HoursWeather";

import "./App.css"

const App = ()=>{
 
  return (
<div className="site-Wrapper" >
<SearchBar/>

<div id="grid-container" >
     <TodayWeather/>
     <HoursWeather/>

 </div>

  <footer>
    <div><p>Data Source: <a src = "https://openweathermap.org/">openweathermap.org</a> </p></div>
  </footer>
</div> )
};

export default App;
