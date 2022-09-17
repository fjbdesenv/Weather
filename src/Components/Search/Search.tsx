import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {Button, TextField, Container} from '@mui/material';
import paramsSearch from '../../Interfaces/Params/Search';
import './Search.css';

export default function Seach ({city, setCity, consult}: paramsSearch): ReactJSXElement {
    return(
        <Container maxWidth="sm">
          <TextField
            label='Cidade'
            variant='standard'
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder='Digite uma cidade'
          >
          </TextField>
          <Button 
            variant="contained"
            color="secondary"
            type='submit'
            onClick={(event) =>{
              event.preventDefault();
              consult(city);
            }}
          >Pesquisar</Button>
        </Container>
    );
}