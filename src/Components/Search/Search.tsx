import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {Button, TextField, Container} from '@mui/material';
import { FormEvent } from 'react';
import paramsSearch from '../../Interfaces/Params/Search';
import './Search.css';

export default function Seach ({seachCity, setCity, consult}: paramsSearch): ReactJSXElement {
  const submit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    consult();
  }
  
  return(
        <Container maxWidth="sm">
          <TextField
            label='Cidade'
            variant='standard'
            value={seachCity}
            onChange={(event) => setCity(event.target.value)}
            placeholder='Digite uma cidade'
          >
          </TextField>
          <Button 
            variant="contained"
            color="secondary"
            type='submit'
          >Pesquisar</Button>
        </Container>
    );
}