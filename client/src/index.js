import React from 'react';
import ReactDOM from 'react-dom';
import "./i18n";
import App from './App';
import {BrowserRouter} from "react-router-dom";

import "../style/index.scss";
import "bootstrap/js/dist/collapse";
import Alert from "bootstrap/js/dist/alert";
import Button from "bootstrap/js/dist/button";
import Carousel from "bootstrap/js/dist/carousel";
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Tab from "bootstrap/js/dist/tab";
import Modal from 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);