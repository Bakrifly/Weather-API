import React from "react";
import SearchBar from "./components/SearchBar";


import "./App.css"



const App = ()=>{
 
  return (
<div className="site-Wrapper" >

<SearchBar/>

  <footer>
    <div><p>Data Source: <a href="https://openweathermap.org/">openweathermap.org</a> </p></div>
  </footer>
</div> )
};
export default App;
