import './Weather.css';
import { useState } from 'react';
import axios from 'axios';
const apikey= process.env.REACT_APP_API_KEY;

console.log(apikey);

function Weather() {
    const [display, setDisplay] = useState(false);
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");
    const [data, setData] = useState({});
    const [description, setDescription] = useState("")
    const [temp, setTemp] = useState("");
    
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;

    let name = document.getElementById('name');
    let icon = document.getElementById('icon');
    let descr = document.getElementById('descr');
    let temperature = document.getElementById('temp');
    
    
    
   
        const getWeather = () => {
           
            axios.get(url).then((response) => {
                
                let area = document.getElementById('display');
                area.style.display = "block";
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
                
                setCity(newInput);
            }}/><br></br>
            <button onClick={getWeather}>Show Weather</button>
            
        </div>
        </div>
        <div className="display" id='display'>
        
        <h1 id='name'>{city}</h1>
        <img src={img} alt="" id='icon'/>
        <h3 id='descr'>{description}</h3>
        <h2 id='temperature'>{temp}</h2>


        </div>
        </div>
       
        </>
    );
}

export default Weather;