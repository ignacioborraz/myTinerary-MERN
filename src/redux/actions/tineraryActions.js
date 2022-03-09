/* import axios from 'axios';

const productosActions = {
    
    fetchearProductos: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/productos')
            dispatch({type:'fetch', payload:res.data.respuesta})
       }
    },
    borrarProducto: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('http://localhost:4000/api/productos/'+id)

                dispatch({type:'delete', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrar: (productos, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{productos, value}})
        }
    },
    cargarProducto: (name,precio)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/productos',{name,precio})
            dispatch({type:'cargarProducto', payload:respuesta.data.respuesta})

        }
    }





}

export default productosActions; */