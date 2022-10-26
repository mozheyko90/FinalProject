import React from 'react';
import ReactDOM from 'react-dom/client';


import { HashRouter } from 'react-router-dom';
import Router from './router/Routes';
import MainLayout from './components/Layouts'
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import './index.css';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";




const root = ReactDOM.createRoot(document.getElementById('root'));

const persistor = persistStore(store);

root.render(
<HashRouter>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
<MainLayout>
  <Router />
</MainLayout>
</PersistGate>
</Provider>
</HashRouter>
);


