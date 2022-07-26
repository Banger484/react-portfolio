import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Desktop from "./Desktop";
import './mobile-layout.css'
import './desktop-layout.css'
import { BrowserRouter as Router } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Desktop />
    </Router>
  </React.StrictMode>
);
