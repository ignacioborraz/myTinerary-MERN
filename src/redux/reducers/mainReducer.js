//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import cityReducer from './cityReducer'
import tineraryReducer from './tineraryReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({cityReducer,tineraryReducer,userReducer})

export default mainReducer
