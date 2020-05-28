import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import Test from './dev_test/Test'

process.env.REACT_APP_MODE === 'test1' ?

ReactDOM.render (<Test />,document.getElementById("root")):

ReactDOM.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)

