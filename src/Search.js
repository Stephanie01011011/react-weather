import { useState} from 'react';
import axios from 'axios';
import Weather from './Weather';
import './Search.css';
import Footer from './Footer';




const apikey= "fa86a5b88d2945ecad1222440231907";

function Search(){
   
    const [img, setImg] = useState("");
    
    const [description, setDescription] = useState("")
    const [temp, setTemp] = useState("");
    const [city, setCity] = useState("Indianapolis");
    const [wind, setWind] = useState("");
    const [precip, setPrecip] = useState("");
    const [humidity, setHumidity] = useState("");
    const [feel, setFeel] = useState("");
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;

        

    const getWeather = () => {
           
        axios.get(url).then((response) => {
            let area2 = document.getElementById('otherDisplay');
            area2.style.display = "flex";
            let area = document.getElementById('display');
            area.style.display = "flex";
           //setData(response.data)
           setTemp(response.data.current.temp_f + "°");
           setDescription(response.data.current.condition.text);
           setImg(response.data.current.condition.icon);
           setWind(response.data.current.wind_mph);
           setPrecip(response.data.current.precip_in);
           setHumidity(response.data.current.humidity);
           setFeel(response.data.current.feelslike_f);
        
          let onload = document.getElementsByClassName('onload')[0];
          onload.style.display = "none";
       
 


        }); 
    
    }


  
    return(
        <>
        <div className="container">
        <div className="title">
            
         
        <div className="search"> 
           
            <input type="text" id='searchInput' placeholder='Enter City...' onChange={() => {
                let onload = document.getElementsByClassName('onload')[0];
                onload.style.display = "flex";
                let area = document.getElementById('display');
                area.style.display = "none";
                let area2 = document.getElementById('otherDisplay');
                area2.style.display = "none";
                
                let input = document.getElementById('searchInput').value;
                
                let newInput = input.charAt(0).toUpperCase() + input.slice(1)
                
                setCity(newInput)
            }}/><br></br>
            <button onClick={getWeather}>Show Weather</button>
            
        </div>
        </div>
        <Weather city={city} temp={temp} img={img} description={description} wind={wind} humidity={humidity} precip={precip} feel={feel}/>
        </div>
        <Footer />
        </>
    )
}

export default Search;

