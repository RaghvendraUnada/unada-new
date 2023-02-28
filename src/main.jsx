import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
// axios.defaults.baseURL = "https://unada-backend.unada.in/";
axios.defaults.baseURL = "http://192.168.29.5:8000/";
=======
axios.defaults.baseURL = "https://unada-backend.unada.in/";
// axios.defaults.baseURL = "http://localhost:8000/";
>>>>>>> 76bd3d8455dab409bd19003f9ce1c029bb8698cc

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
