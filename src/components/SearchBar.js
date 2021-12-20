import React, {useState} from "react";
// import FakeWeather from "../fakeWeatherData.json"
import TodayWeather from "./TodayWeather";
import HoursWeather from "./HoursWeather";




const apikey = "e872016d2afb7c5f762a3978f38bcf1d";



 function SearchBar() {
    
    // use state hooks
    const [query, setQuery] = useState(""); 
    const [currWeather, setCurrWeather] = useState ([]);

   
    // get data function----------
const currData = async   () => {
const  weatherData = [await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apikey}`)
     .then(response =>  response.json()).then(result => {return result} ).catch(err => "error"),

  await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apikey}`)
    .then(response =>  response.json()).then(result => {return result}).catch(err => "error" )];

setCurrWeather(weatherData)
};


//    console.log(currWeather.weatherHR)
if (currWeather.length > 0 && currWeather[0] != "error"){
    return (<>
        <header>
            <div className="Top-Banner">
                <form className="search-wrapper" onSubmit={(evt) => evt.preventdefault()} >

                    <input onChange = {(evt) => setQuery(evt.target.value)} type="text" placeholder="Search Location..."></input>
                    
                    <button type="button" onClick = {currData}
                    >Search</button>
               
                </form>
            </div>
       </header>

        <div id="grid-container" >
     <TodayWeather data={currWeather} />
     <HoursWeather data={currWeather} />

 </div>
 </>)} 
 
 
 else {
            return (<>
        <header>
            <div className="Top-Banner">
                <form className="search-wrapper" onSubmit={(evt) => evt.preventdefault()} >

                    <input onChange = {(evt) => setQuery(evt.target.value)} type="text" placeholder="Search Location..."></input>
                    
                    <button type="button" onClick = {currData}
                    >Search</button>
               
                </form>
            </div>
       </header>

        <div id="grid-container" >
        <h1> please input a city name</h1>



 </div>
 </>
    )
    }
}


export default SearchBar;