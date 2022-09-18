import { Container } from '@mui/material';
import paramsApp from '../../Interfaces/Params/App';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App({title}:paramsApp): ReactJSXElement {
  return (
    <Container className="App">

      <Header title={title}/>
      <Main/>
      <Footer author='Fábio Júnior Barbosa' />
    
    </Container>
  );
}

export default App;
