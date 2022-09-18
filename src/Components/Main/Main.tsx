import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { ENV } from "../../config/env";
import ModelWeather from "../../Models/ModelWeather";
import Error from "../Error/Error";
import Seach from "../Search/Search";
import Weather from "../Weather/Weather";

import './Main.css';

export default function Main(): ReactJSXElement {

  const [seachCity, setSeachCity] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(new ModelWeather('', '', '', '', '', '', '', '', '', '', ''));

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCity(seachCity);
    setSeachCity('');
  }

  const updateWeather = (data: any) => {
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
    const URL_FULL = ENV.API_URL + '?access_key=' + ENV.API_KEY_ACESS + '&query=' + city;

    axios.get(URL_FULL).then((response) => {
      console.log("Successfully")
      if(response.data?.error?.code === 601){
        console.error(response.data.error);
        setError(false);
      }else if (response.data?.error !== undefined){
        console.error(response.data.error);
        setError(true);
      }else{
        updateWeather(response.data);
      }
      }).catch((error) => {
      console.error(error);
      setError(true);
    })
  }

  const closeError = () =>{
    setError(false);
  }

  useEffect(() => {
    getResultAPI();
  }, [city])

  return (
    <main>
      {error && <Error onclick={closeError} />}
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