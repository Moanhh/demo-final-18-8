import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter , Routes, Route  } from "react-router-dom";

import AuthProvider from '../src/contexts/AuthContext';



ReactDOM.render(
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
  document.getElementById('root')
);