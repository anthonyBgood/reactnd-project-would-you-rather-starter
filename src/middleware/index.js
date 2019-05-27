import Thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'


export default applyMiddleware(
  Thunk,
  logger,
)
