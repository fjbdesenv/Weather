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
    }
    return result;
}

export default function Weather ({weather}:paramsWeather): ReactJSXElement{
    return(
        <Container className='weather' maxWidth="sm">
            
            <h1>{weather.name}</h1>            
            <h3>{weather.day}</h3>

            <img src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" alt="" />
            <TextField label='Máxima' value={weather.max} type='text'></TextField>
            <TextField label='Mínima' value={weather.min} type='text'></TextField>

            <p className='status'>
                {checkStatus(weather.status)}
            </p>
        
        </Container>
    );
}