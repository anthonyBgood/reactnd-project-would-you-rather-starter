import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import middleware from './middleware'

import './styles/index.css'
import App from '../src/components/App';

const store = createStore(reducer)


ReactDOM.render( 
  <Provider store = { store }>
    <App />
  </Provider>
  
  , document.getElementById('root')
  );


