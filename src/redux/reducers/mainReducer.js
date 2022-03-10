//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import cityReducer from './cityReducer'
import inputReducer from './inputReducer'
import tineraryReducer from './tineraryReducer'

const mainReducer = combineReducers({cityReducer,inputReducer,tineraryReducer})

export default mainReducer
