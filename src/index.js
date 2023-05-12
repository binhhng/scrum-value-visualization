import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage/Home.jsx';
import ScrumValuesForm from './ScrumValueForm/ScrumValueForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Homepage />
    <ScrumValuesForm />
  </React.Fragment>
);

