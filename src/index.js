import React from 'react';
import {render} from "react-dom";
import App from "./examples/App";

const Appli = () => (
    <App/>
);

render(<Appli/>, document.getElementById("root"));
