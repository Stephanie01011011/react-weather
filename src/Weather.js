import './Weather.css';






function Weather({city, temp, description, img, wind, humidity, precip, feel}) {
  
    
    
    

    /*let name = document.getElementById('name');
    let icon = document.getElementById('icon');
    let descr = document.getElementById('descr');
    let temperature = document.getElementById('temp');*/
    
    
    
   
        
   
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
        
        <div id="otherDisplay">
            <div className="col1">
                <h2>Wind: {wind}</h2>
                <h2>Humidity: {humidity}</h2>
            </div>
            <div className="col2">
                <h2>Precipitation: {precip}</h2>
                <h2>Feels Like: {feel}</h2>
            </div>
        </div>

       
        
       
        </>
    );
}

export default Weather;