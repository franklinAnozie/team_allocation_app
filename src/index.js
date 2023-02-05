import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './context';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);