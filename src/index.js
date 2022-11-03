import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import About from './About';
import HocMain from './hoc/HocMain';
import Dummy from './hoc/DummyList';
import RenderPropsMain from './renderProp/RenderPropsMain';
import HooksMain from './components/HooksMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='default' element={<Dummy/>}/>
      <Route path='hoc' element={<HocMain/>}/>
      <Route path='prop' element={<RenderPropsMain/>}/>
      <Route path='hooks' element={<HooksMain/>}/>
     </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
