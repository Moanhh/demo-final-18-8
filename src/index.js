import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter , Routes, Route  } from "react-router-dom";

import AuthProvider from '../src/contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  
);