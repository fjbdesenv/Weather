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
            <h3>{weather.day}</h3>

            <p>
                <img src={weather.img} alt="" />
                <span  className='status'> {checkStatus(weather.description)} </span>
            </p>

            <hr />
            <TextField label='Temperatura' value={weather.temperature} type='text'></TextField>
            <TextField label='Umidade' value={weather.humidity} type='text'></TextField>
            <TextField label='Pressão' value={weather.pressure} type='text'></TextField>
            <TextField label='Visibildade' value={weather.visibility} type='text'></TextField>
            <TextField label='País' value={weather.country} type='text'></TextField>
            <TextField label='Região' value={weather.region} type='text'></TextField>
            <TextField label='Latitude' value={weather.lat} type='text'></TextField>
            <TextField label='Longitude' value={weather.lon} type='text'></TextField>
        
        </Container>
    );
}