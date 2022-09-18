import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import paramsFooter from "../../Interfaces/Params/Footer";

import './Footer.css';

export default function Footer({author}:paramsFooter):ReactJSXElement{
    return (
        <footer>{author}</footer>
    );
}