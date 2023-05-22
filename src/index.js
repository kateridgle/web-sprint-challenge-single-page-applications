import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {BrowserRouter} from "react-router-dom";

const styles = {margin: '1rem', padding: '0.5rem', border: '2px solid black'}

const root = ReactDOM.render(<App />, document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);



