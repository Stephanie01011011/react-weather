import './Weather.css';
import { useState } from 'react';
import axios from 'axios';





function Weather({city, temp, description, img}) {
  
    
    
    

    let name = document.getElementById('name');
    let icon = document.getElementById('icon');
    let descr = document.getElementById('descr');
    let temperature = document.getElementById('temp');
    
    
    
   
        
   
    return(
        <>
        
        <div className="display" id='display'>
        <div className="nameimg">
            <h1 id='name'>{city}</h1>
            <img src={img} alt="" id='icon'/>
        </div>
       
       <div className="descriptemp">
        <h3 id='descr'>{description}</h3>
        <h2 id='temperature'>{temp}</h2>
        </div>
        
        
        </div>
        


       
        
       
        </>
    );
}

export default Weather;