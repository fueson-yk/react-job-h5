import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// redux demo
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// router
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
//axios
import axios from 'axios'
import './config'

function reducer() {}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  render() {
    const name = this.state.data.length > 0 ? this.state.data[0].name : ''
    return (
      <h2>hello, {name}</h2>
    )
  }  

  componentDidMount() {
    axios.get('/data').then(res => {
      console.log('请求了')
      // console.log(res.data)
    })
  }
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)

registerServiceWorker()
