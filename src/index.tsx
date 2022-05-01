import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

const grassyTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0e5e83',
    },
    secondary: {
      main: '#6dbd4d',
    },
    background: {
      default: '#172027',
      paper: '#252e35',
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={grassyTheme}>
          <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
