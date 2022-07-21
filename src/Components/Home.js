import React, { useEffect, useState } from "react";
import '../css/Home.css';

function Home()
{

      const [city,setCity]=useState(null);
      const [search,setSearch]=useState("Pithoragarh");

      useEffect(()=>{
            const fetchApi= async  ()=>{
                  const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=84c1449aa31638d6d9ee99eb8473d011`
                  const response=await fetch(url);
                  // For Converting the current data into json formate

                  const resjson=await response.json();
                  
                  setCity(resjson.main);
            }


            fetchApi();
      },[search])
      return(
            <div className="container">
                  <div className="logo">
                        <h1>i-Weather</h1>
                  </div>
                  {/* for real time change we use the event.target.value */}
                  <div className="input">
                        <input type="search" placeholder="Search City" className="search_bar" 
                        onChange={ (event)=>{
                              setSearch(event.target.value)
                        }} />
                  </div>
                  {
                        !city ? (
                        <p style={{margin:"10px", color: "white"}}>No Data Found</p>
                        )
                        :(
                        <div className="information">
                              <h2 className="location"><i class="fa-solid fa-location-pin"></i> {search} </h2>
                              <h1 className="temperature"> {city.temp} Celcius </h1>
                              <h3 className="min-max-temperature">Min : {city.temp_min} Celcius | Max : {city.temp_max} Celcius 
                              </h3>
                        </div>
                        )

                  }
                  
            </div>
      )
}

export default Home;