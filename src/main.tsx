import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={ theme }>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
