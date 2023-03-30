import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import React from "react";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

export const render = ({ path }) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <RecoilRoot>
        <StaticRouter path={path}>
          <App />
        </StaticRouter>
      </RecoilRoot>
    </React.StrictMode>
  );
};
