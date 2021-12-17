import React from "react";
import SearchBar from "./components/SearchBar";
import TodayWeather from "./components/TodayWeather";
import HoursWeather from "./components/HoursWeather";
import FakeWeather from "./fakeWeatherData.json"

import "./App.css"


const currLow = FakeWeather.list[0].main.temp_min;
const currHigh =FakeWeather.list[0].main.temp_max;
const currHumidity =FakeWeather.list[0].main.humidity;
const currPressure =FakeWeather.list[0].main.pressure;
const App = ()=>{
 
  return (
<div className="site-Wrapper" >
<SearchBar/>

<div id="grid-container" >
     <TodayWeather low={currLow} high={currHigh} humidity={currHumidity} pressure={currPressure}/>
     <HoursWeather temp={FakeWeather}/>

 </div>

  <footer>
    <div><p>Data Source: <a src = "https://openweathermap.org/">openweathermap.org</a> </p></div>
  </footer>
</div> )
};
{console.log(FakeWeather.list)}
export default App;
