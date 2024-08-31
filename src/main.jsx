import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/index'
import { Provider } from 'react-redux'

// import App from './router/app'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
