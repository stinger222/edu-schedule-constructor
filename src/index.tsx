import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './core/themes/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
		<GlobalStyles />
		<App />
  </React.StrictMode>
);
