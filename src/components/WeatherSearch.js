import React,{useState,useEffect} from 'react'
import '../css/wsStyle.css'

function WeatherSearch() {
    const [search,setSearch] = useState('Mumbai')
    const [city, setCity] = useState()

    useEffect(() => {
        const fetchApi =async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&&units=metric&appid=b67a3da9e7a76b06647176076e312df2`
            const response = await fetch(url)
            //console.log(response)
            const resJson = await response.json()
          //  console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi()
    }, [search])
    return (
        <div className='box'>
            <div>
            <input type='search' name='search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
           </div>
           {
               !city ? (<p>No data found</p> ):
               (<div>
               <h1> <i class="fas fa-street-view"></i> {search}    </h1>
               <h2>Temp: {city.temp}°C</h2>
               <h3>Min temp: {city.temp_min}°C || Max temp: {city.temp_max}°C</h3>

            </div>)  
           }
                    
        </div>
    )
}

export default WeatherSearch
