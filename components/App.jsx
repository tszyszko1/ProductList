import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProductsList from '../containers/ProductList'
import ProductDetail from '../containers/ProductDetail'
import reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/" component={ProductsList} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}
