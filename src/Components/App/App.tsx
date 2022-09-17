import { FormEvent, useState } from 'react';
import Seach from '../Search/Search';
import { Container } from '@mui/material';
import Weather from '../Weather/Weather';
import paramsApp from '../../Interfaces/Params/App';
import ModelWeather from '../../Models/ModelWeather';

import './App.css';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

function App({title}:paramsApp): ReactJSXElement {
  const [seachCyte, setSeachCyte] = useState('');
  const [cyte, setCyte] = useState('Curituba');
  const [weather, setWeather] = useState(new ModelWeather());

  const handleSubmit = (event:FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
  }

  const getResultAPI = (city:String):void => {
    setCyte(seachCyte);
    setSeachCyte('');
  }

  return (
    <Container className="App">
      <h1 id='title'>{title}</h1>
      <form action='' onSubmit={handleSubmit}>
        
        <Seach 
          city={seachCyte}
          setCity={setSeachCyte}
          consult={getResultAPI}
        />        
        
        <Weather
          weather={
            weather            
          }
        />

      </form>
    </Container>
  );
}

export default App;
