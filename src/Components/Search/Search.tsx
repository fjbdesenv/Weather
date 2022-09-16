import { Dispatch, SetStateAction } from 'react'

import './Search.css';

interface params {
    city: string,
    setCyte: Dispatch<SetStateAction<string>>
}

export default function Seach ({city, setCyte}: params) {
    return(
        <div id='search-cyte'>
          <input 
            type="text" 
            name="city" 
            id="city"
            value={city}
            onChange={(event) => setCyte(event.target.value)}
            placeholder='Digite uma cidade'/>
          <input type="submit" value={'Pesquisar'} />
        </div>
    );
}