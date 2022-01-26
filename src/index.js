import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const defaultState = {
  contacts: [
    { name: 'Serhii Zheleznyk', tel: '0938539561', id: 1 },
    { name: 'Valentyna Zheleznyk', tel: '0938539562', id: 2 },
    { name: 'Olga Zheleznyk', tel: '0938539551', id: 3 },
    { name: 'Ira Zheleznyk', tel: '2443215248', id: 4 },
    { name: 'Oleksii Zheleznyk', tel: '0938539123', id: 5 },
    { name: 'Sascha Kolosovskii', tel: '0938539121', id: 6 },
    { name: 'Liuba Kolosovska', tel: '0938539564', id: 7 },
  ],
  name: '',
  tel: '',
  filter: '',
  lastID: 7,
  Loaded: false,
  isCorrectName: false,
  isCorrectNumber: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH-CHANGE':
      return { ...state, Loaded: true }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
