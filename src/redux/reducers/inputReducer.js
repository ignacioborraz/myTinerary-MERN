const initialState = {
    inputSearch: ""
}

const inputReducer = (state = initialState, action) => {
    //console.log(action);
    //console.log(state);
    switch (action.type) {
        case 'GET_VALUE':
            return {
                ...state,
                inputSearch: action.payload
            };
            default:
                return state
    }
}

export default inputReducer