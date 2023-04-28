import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Client/src/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Client/src/components/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById("root")
);
