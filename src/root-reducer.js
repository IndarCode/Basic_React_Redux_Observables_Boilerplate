import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import app from './reducers/app-reducer'

export default combineReducers({
  app,
  form: formReducer,
})
