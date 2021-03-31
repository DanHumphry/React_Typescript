import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
