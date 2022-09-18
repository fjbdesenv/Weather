import { FormEvent, useEffect, useState } from 'react';
import Seach from '../Search/Search';
import { Container } from '@mui/material';
import Weather from '../Weather/Weather';
import paramsApp from '../../Interfaces/Params/App';
import ModelWeather from '../../Models/ModelWeather';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ENV } from '../../config/env';
import axios from 'axios';
import './App.css';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

function App({title}:paramsApp): ReactJSXElement {
  const [seachCity, setSeachCity] = useState('');
  const [city, setCity] = useState('Brasilia');
  const [weather, setWeather] = useState(new ModelWeather('','','','','','','','','','',''));

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
    getResultAPI();    
  }, [city])

  return (
    <Container className="App">
      <h1 id='title'>{title}</h1>
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
    </Container>
  );
}

export default App;
