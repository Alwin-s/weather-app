import React from 'react'
import "./weather.css"

function Weather() {

let apiKey="dd94f859a0e52d6e4767fddf735f04a7";



const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
        return 0;
    }
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${apiKey}`;

        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();

        const humi = document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-tem");
        const location = document.getElementsByClassName("weather-location");

        if (data.main && data.wind && data.name) {
            humi[0].innerHTML = data.main.humidity + "%";
            wind[0].innerHTML = data.wind.speed + "Km/hr";
            temperature[0].innerHTML = data.main.temp + "°c";
            location[0].innerHTML = data.name;
        } else {
            throw new Error('Required data not found in API response');
        }
    } catch (error) {
        console.error('Error fetching or processing data:', error);
        // Handle error appropriately (e.g., show error message to user)
    }
}











  return (
    
    
        // search and input
        <div className="container">
            <div className="top-bar">
                <input type="text" className='cityInput' placeholder='Search' />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" width={20}/>
                </div>
            </div>


            <div className="weather-image">
                <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt=""  width={150}/>
            </div>
            <div className="weather-tem"> --°c </div>
            
            <div className="weather-location">------</div>

            <div className="data-container">
                <div className="element">
                    <img src="https://static-00.iconduck.com/assets.00/humidity-icon-512x419-5m7ztixz.png" alt="" width={35} style={{marginTop:"10px"}}/>
                </div>
                <div className="data" style={{marginLeft:"-9%"}}>
                    <div className="humidity-percentage" style={{fontFamily:"",fontWeight:"bold",color:"yellow"}}>--%</div>
                    <div className="text" style={{fontFamily:"cursive",fontWeight:"bold"}}>Humidity</div>
                </div>
                <div className="element">
                    <img style={{marginLeft:"60%"}} src="https://cdn-icons-png.flaticon.com/512/172/172922.png" alt="" width={40}/>
                </div>
                <div className="data">
                    <div className="wind-rate" style={{marginLeft:"-30%",fontFamily:"",fontWeight:"bold",color:"blue"}}>-- km/hr</div>
                    <div className=" text" style={{marginLeft:"-30%",fontFamily:"cursive",fontWeight:"bold",color:"black"}}>Wind Speed</div>
                </div>
            </div>
        </div>









   
  )
}

export default Weather;