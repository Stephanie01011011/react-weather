import './Weather.css';
import { useState } from 'react';
import axios from 'axios';

//add key here

function weatherDisplay(){
    const res = axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/3.0/onecall?lat=39&lon=-86&appid=${key}`,

    });
}

function Weather() {
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [img, setImg] = useState("");
    
    var input = document.getElementById("searchInput");
    
    return(
        <>

        <div className="title">
            <h1 style={{color: 'white'}}>Weather App</h1>
            

        <div className="search"> 
            <label htmlFor="search">City: </label>
            <input type="text" id='searchInput'/><br></br>
            <button onClick={weatherDisplay}>Show Weather</button>
        </div>
        </div>
        <div className="display">
            <h3>{city}</h3>
            <img src={{img}} alt="" />
            <h1>{temp}</h1>
        </div>
       
        </>
    );
}

export default Weather;