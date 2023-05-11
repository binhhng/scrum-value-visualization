import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage/Home.jsx';
import ScrumValuesForm from './ScrumValueForm/ScrumValueForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/visualize" element={<ScrumValuesForm />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>
  // <React.StrictMode>
  //   <Homepage />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
