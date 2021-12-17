import React from "react";



function SearchBar(props) {
    return (
        <header>

            <div className="Top-Banner">

                <form className="search-wrapper">
                    <input type="text" placeholder="Search Location..."></input>
                    <button>Search</button>
                </form>

            </div>

        </header>
    );
}


export default SearchBar;