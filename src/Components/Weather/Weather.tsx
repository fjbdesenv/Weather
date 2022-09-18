import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {TextField, Container} from '@mui/material';
import paramsWeather from '../../Interfaces/Params/Weather';
import './Weather.css';

const checkStatus = (status:string):string => {
    let result = '';
    switch(status){
        case 'Sunny':
            result = 'Ensolarado';
            break;
        case 'Rainy':
            result = 'Chuvoso';
            break;
        case 'Clear':
            result = 'Claro';
            break;
        case 'Partly cloudy':
            result = 'Parcialmente nublado';
            break;
        case 'Light Rain Shower':
            result = 'Chuva Leve';
            break;
        default:
            result =  status;
            break;
    }
    return result;
}

export default function Weather ({city, weather}:paramsWeather): ReactJSXElement{
    return(
        <Container className='weather' maxWidth="sm">
            
            <h1>{city}</h1>            
            <h2>{weather.day}</h2>

            <p>
                <img src={weather.img} alt="" />
                <span  className='status'> {checkStatus(weather.description)} </span>
            </p>

            <hr />
            <TextField label='Temperatura' className='weather-box' value={weather.temperature} type='text'></TextField>
            <TextField label='Umidade' className='weather-box' value={weather.humidity} type='text'></TextField>
            <TextField label='Pressão' className='weather-box' value={weather.pressure} type='text'></TextField>
            <TextField label='Visibildade' className='weather-box' value={weather.visibility} type='text'></TextField>
            <TextField label='País' className='weather-box' value={weather.country} type='text'></TextField>
            <TextField label='Região' className='weather-box' value={weather.region} type='text'></TextField>
            <TextField label='Latitude' className='weather-box' value={weather.lat} type='text'></TextField>
            <TextField label='Longitude' className='weather-box' value={weather.lon} type='text'></TextField>
        
        </Container>
    );
}