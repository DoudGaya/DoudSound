import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux'


import './index.css';
import App from './App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
        <Router>
          <App />
        </Router>
    </ReduxProvider>
  </React.StrictMode>,
);
