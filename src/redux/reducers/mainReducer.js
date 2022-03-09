//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import cityReducer from './cityReducer'
import inputReducer from './inputReducer'
//import tinerariesReducer from './tinerariesReducer'

const mainReducer = combineReducers({cityReducer,inputReducer})  //combino los reductores

export default mainReducer
