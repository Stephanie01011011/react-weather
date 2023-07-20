import { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import './Search.css';

const apikey= process.env.REACT_APP_API_KEY;

function Search(){
    const [display, setDisplay] = useState(false);
    const [img, setImg] = useState("");
    const [data, setData] = useState({});
    const [description, setDescription] = useState("")
    const [temp, setTemp] = useState("");
    const [city, setCity] = useState("");
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;

    const getWeather = () => {
           
        axios.get(url).then((response) => {
            
            let area = document.getElementById('display');
            area.style.display = "flex";
           setData(response.data)
           setTemp(response.data.current.temp_f + "°");
           setDescription(response.data.current.condition.text);
           setImg(response.data.current.condition.icon);
          
           
        }); 

    }
    return(
        <>
        <div className="container">
        <div className="title">
            <h1 id='titleLogo'>Weather App</h1>
         
        <div className="search"> 
           
            <input type="text" id='searchInput' placeholder='Enter City...' onChange={() => {
                let area = document.getElementById('display');
                area.style.display = "none";
                let input = document.getElementById('searchInput').value;
                
                let newInput = input.charAt(0).toUpperCase() + input.slice(1)
                
                setCity(newInput)
            }}/><br></br>
            <button onClick={getWeather}>Show Weather</button>
            
        </div>
        </div>
        <Weather city={city} temp={temp} img={img} description={description}/>
        </div>
        </>
    )
}

export default Search;