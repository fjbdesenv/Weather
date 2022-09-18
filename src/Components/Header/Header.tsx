import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import paramsHeader from "../../Interfaces/Params/Header";

import './Header.css';

export default function Header({title}:paramsHeader):ReactJSXElement{
    return (
        <h1 id='title'>{title}</h1>
    );
}