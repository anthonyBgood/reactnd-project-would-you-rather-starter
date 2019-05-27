import { applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import logger from './logger'


export default applyMiddleware({
  
  Thunk ,
})
