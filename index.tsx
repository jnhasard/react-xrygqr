import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Demo2 from './demo2';
import Demo3 from './demo3';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
      <Demo2 />
      <Demo3 />
    </StyledEngineProvider>
  </React.StrictMode>
);
