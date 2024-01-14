import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </React.StrictMode>,
);
