import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Alert, AlertTitle, Button, Container } from '@mui/material';
import paramsError from '../../Interfaces/Params/Error';
import './Error.css';

export default function Error ({onclick}:paramsError): ReactJSXElement{
    return (
        <Container className='container-error'>
            <Alert
                className='alert' 
                severity="warning"
                action={
                    <Button variant='contained' onClick={() => onclick()}>Fechar</Button>
            }>
                <AlertTitle > Erro </AlertTitle>
                <p>
                    Erro ao fazer consulta, tente novamente!
                </p>
                <p>
                    API usa protocolo HTTP altere a permissão 'Conteúdo não seguro' para liberado, apenas para essa URL. <a href="https://support.google.com/chrome/answer/114662?hl=pt-BR&co=GENIE.Platform%3DDesktop"> Saiba mais.</a>  
                </p>
            </Alert>
        </Container>
    );
}