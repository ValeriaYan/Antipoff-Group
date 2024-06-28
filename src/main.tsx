import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import './firebase'

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

