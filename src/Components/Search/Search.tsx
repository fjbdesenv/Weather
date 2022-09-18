import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {Button, TextField, Container} from '@mui/material';
import paramsSearch from '../../Interfaces/Params/Search';
import './Search.css';

export default function Seach ({seachCity, setCity, consult}: paramsSearch): ReactJSXElement {
  
  return(
        <Container maxWidth="sm">
          <TextField
            label='Cidade'
            variant='standard'
            value={seachCity}
            onChange={(event) => setCity(event.target.value)}
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