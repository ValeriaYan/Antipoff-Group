import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import { store, persistor } from './store';
import './index.css'
import './firebase'

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Antipoff-Group">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

