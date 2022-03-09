const initialState = { //defino el estado inicial del reductor
    cities: [],
    filterCity: [],
    auxCities: []
}

const cityReducer = (state = initialState, action) => { //defino el reductor, que va a depender del estado inicial y de una accion
    //console.log(action);
    //console.log(state);
    switch(action.type) {
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload
            }
        case 'DEL_CITY':
            return {
                ...state,
                cities: action.payload
            }
        case 'UPD_CITY':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities: action.payload,
                auxCities: [...cities]
            }
        case 'FIL_CITIES':
            console.log(action.payload);
            let filter = state.cities.filter(everyCity => everyCity.city.toLowerCase().startsWith(action.payload.toLowerCase()))
            console.log(filter)
            return {
                ...state,
                filterCity: filter
            }
        default:
            return state
    }
}
export default cityReducer