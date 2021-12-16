import React from "react";


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
  <div className="grid-container">
    <div className="today-weather"></div>
    <div className="hour3"></div>
    <div className="hour6"></div>
    <div className="hour9"></div>
    <div className="hour12"></div>
    <div className="hour15"></div>
    <div className="hour18"></div>
    <div className="hour21"></div>
  </div>
</div> )
};

export default App;
