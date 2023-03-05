import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './service/serviceWorker';
//import { StateProvider } from './service/StateProvider';
//import reducer, { initialState } from './service/reducer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//      <StateProvider initialState={initialState} reducer={reducer}><App /></StateProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// serviceWorker.unregister();

