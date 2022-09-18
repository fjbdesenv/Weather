import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { ENV } from "../../config/env";
import ModelWeather from "../../Models/ModelWeather";
import Seach from "../Search/Search";
import Weather from "../Weather/Weather";

import './Main.css';

export default function Main():ReactJSXElement{

    const [seachCity, setSeachCity] = useState('');
    const [city, setCity] = useState('Brasilia');
    const [weather, setWeather] = useState(new ModelWeather('','','','','','','','','','',''));

    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    
    const handleSubmit = (event:FormEvent<HTMLFormElement>):void => {
      event.preventDefault();
      setCity(seachCity);
      setSeachCity('');
    }
    
    const updateWeather = (data:any) => {
      const weather = new ModelWeather(
        data.current.weather_icons[0],
        'Hoje',
        data.current.weather_descriptions[0],
        data.current.temperature,
        data.current.humidity,
        data.current.pressure,
        data.current.visibility,
        data.location.country,
        data.location.region,
        data.location.lat,
        data.location.lon
      )
      
      setWeather(weather);
    }
    
    const getResultAPI = async () => {
      const URL_FULL = ENV.API_URL+'?access_key='+ENV.API_KEY_ACESS +'&query=' + city;
      
      axios.get(URL_FULL).then((response) => {
        updateWeather(response.data);
      }).catch((error) => {
        console.log('Error: ', error);
      })
    }
    
    
    useEffect(() => {
      //getResultAPI();    
    }, [city])

    return (
        <main>
            <form action='' onSubmit={handleSubmit}>
                <Seach 
                    seachCity={seachCity}
                    setCity={setSeachCity}
                    consult={getResultAPI}
                />        
                <Weather
                    city={city}
                    weather={weather}
                />
            </form>
        </main>
    );
}