import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
