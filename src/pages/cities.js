//importo de librerias externas
import React, {useEffect} from 'react'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Cards from '../components/cardCity'

//importo acciones de redux
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'
import inputActions from '../redux/actions/inputActions'

export default function Cities () {

    const dispatch = useDispatch() //este metodo sirve para despachar acciones al store

    useEffect(() => {
        dispatch(cityActions.getCities()) //despacho la obtencion de ciudades
    },[])
    const citiesFromRedux = useSelector(store => store.cityReducer.cities) //defino una variable con las ciudades del store
    //console.log(citiesFromRedux)

    const handleInput = ({target:{value}}) => { //defino una funcion para manejar el evento del input
        dispatch(inputActions.getValue(value)) //y obtener su valor
    }
    const inputFromRedux = useSelector(store => store.inputReducer.inputSearch)
    //console.log(inputFromRedux)

    return(
        <Box className='main'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh',
                backgroundColor: 'rgb(232, 232, 166, 0.7)'}}>
                <NavBar/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    textAlign: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '20px'}}>
                    <Input onKeyUp={handleInput} placeholder='find your city!' sx={{width: '50%'}} />
                    <Cards input={inputFromRedux} cities={citiesFromRedux} />
                </Box>
                <Footer />
            </Box>
        </Box>
    )
}