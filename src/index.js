import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Signup from './Signup';
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/reactjs" element={<Login />}/>
    <Route path="/app" element={<App />}/>
    <Route path="/Signup" element={<Signup />}/>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
