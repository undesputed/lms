import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import * as ServiceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./app/store";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="68944797193-teede529dnputbsl7aqpj1jqp22fc973.apps.googleusercontent.com">
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

ServiceWorker.unregister();
