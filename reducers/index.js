import { combineReducers } from 'redux'
import ProductsReducer from './products_reducer'

const rootReducer = combineReducers({
  products: ProductsReducer
})

export default rootReducer
