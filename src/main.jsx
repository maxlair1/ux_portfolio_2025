import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
//Keen Slider
import 'keen-slider/keen-slider.min.css';
import './styles/main.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import rawProjects from './projects.json';

const projectArray = Object.values(rawProjects.projects);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> 
);

reportWebVitals();
