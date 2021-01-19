import React from 'react';
import ReactDOM from 'react-dom';
import App from "./router";
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import "./css/global.css"
import "./assets/font/iconfont.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
