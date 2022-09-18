import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Alert, AlertTitle, Button, Container } from '@mui/material';
import paramsError from '../../Interfaces/Params/Error';
import './Error.css';

export default function Error ({onclick}:paramsError): ReactJSXElement{
    return (
        <Container className='container-error'>
            <Alert 
                severity="warning"
                action={
                    <Button variant='contained' onClick={() => onclick()}>Fechar</Button>
            }>
                <AlertTitle> Erro </AlertTitle>
                Erro ao fazer consulta, tente novamente!
            </Alert>
        </Container>
    );
}