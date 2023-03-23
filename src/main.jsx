import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

// axios.defaults.baseURL = "https://unada-backend.unada.in/";
axios.defaults.baseURL = "http://192.168.29.5:8000/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
