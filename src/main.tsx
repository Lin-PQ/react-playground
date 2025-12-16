import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import './mock';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 关键：必须包裹 BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
