const inputActions = {
        getValue: (value) => {
        return (dispatch,getState) => {
            dispatch({type: 'GET_VALUE', payload: value})
        }
    }
}

export default inputActions;