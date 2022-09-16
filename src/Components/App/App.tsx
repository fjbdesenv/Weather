import { FormEvent, useState } from 'react';
import Seach from '../Search/Search';
import './App.css';

interface params{
  title:string
}

function App({title}:params) {
  const [seachCyte, setSeachCyte] = useState('');

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form action='' onSubmit={handleSubmit}>
        <h1 id='title'>{title}</h1>
        <Seach city={seachCyte} setCyte={setSeachCyte} />
      </form>
    </div>
  );
}

export default App;
