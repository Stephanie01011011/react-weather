import './Weather.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Weather() {
    const [city, setCity] = useState("");
    const [data, setData] = useState({});
    const [lon, setLon] = useState();
    const [lat, setLat] = useState();
    const [description, setDescription] = useState("")
    const [temp, setTemp] = useState();
    
    const locUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ce8a56a68d4792f118a4d73c42dc0340`
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ce8a56a68d4792f118a4d73c42dc0340";

    let name = document.getElementById('name');
    let icon = document.getElementById('icon');
    let descr = document.getElementById('descr');
    
    
   
        const getLoc = () => {
           
            //var input = document.getElementById("searchInput").value;
            
            //setCity(input);
            
            axios.get(locUrl).then((response) => {
                
                
                setLon(response.data[0].lon);
                
                setLat(response.data[0].lat);
                
                
              
            }); 

            
        
            
            
           
        }
        const getData = () => {
            axios.get(weatherUrl).then((response) => {
           
                setTemp(response.data.main.temp)
                convert()
                
              
            }); 
                
        }
        const convert = () => {
            let celsius = temp - 273;
            let f = celsius * ( 9 / 5 ) + 32;
            console.log(f);
            //setTemp(f);
            
        }
    
    return(
        <>
        <div className="container">
        <div className="title">
            <h1 style={{color: 'white'}}>Weather App</h1>
            

        <div className="search"> 
           
            <input type="text" id='searchInput' placeholder='Enter City...' onChange={() => {
                var input = document.getElementById('searchInput').value;
                setCity(input);
                getLoc();
            }}/><br></br>
            <button onClick={getData}>Show Weather</button>
            
        </div>
        </div>
        <div className="display">
    
        <h3 id='name'> {city} </h3>
            <img src={{}} alt="" id='icon'/>
            <h2 id='descr'> {description}</h2>
            <h1 id='temp'> {temp}</h1>

        </div>
        </div>
       
        </>
    );
}

export default Weather;