import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App'; //входная точка всех компонентов

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //рендер входной точки (App)
//StrictMode - инструмент  для обнаружения ошибок, проблем в приложении
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
