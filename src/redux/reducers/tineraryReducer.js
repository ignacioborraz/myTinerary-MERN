/* 
const initialState = {
    productos:[],
    auxiliar:[],
    pepito:'pépito'
}

const productosReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            
            return {
                ...state,
                productos: action.payload,
                auxiliar: action.payload,
            }
            
        case 'delete':
            return {
                ...state,
                productos: action.payload
            }

        case 'cargarProducto':
            let productos = [...state.productos]
            productos.push(action.payload)
            return{
                ...state,
                productos,
                auxiliar: [...productos]
            }

        case 'filtro':
            const filtrado =action.payload.productos.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))

            return {
                ...state,
                productos: filtrado
            }
        default:
            return state
    }


}
export default productosReducer */