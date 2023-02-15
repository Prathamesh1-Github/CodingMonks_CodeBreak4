// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./styles/login.css"
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
