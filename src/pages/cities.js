//importo de librerias externas
import React, {useEffect, useState} from 'react'
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

export default function Cities () {

    const dispatch = useDispatch() //este metodo sirve para despachar acciones al store

    useEffect(() => {
        dispatch(cityActions.getCities()) //despacho la obtencion de ciudades
    },[])
    const citiesFromRedux = useSelector(store => store.cityReducer.cities) //defino una variable con las ciudades del store
    //console.log(citiesFromRedux)

    const [inputSearch,setInputSearch] = useState()

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
                    <Input onKeyUp={event => setInputSearch(event.target.value)} placeholder='find your city!' sx={{width: '50%'}} />
                    <Cards input={inputSearch} cities={citiesFromRedux} />
                </Box>
                <Footer />
            </Box>
        </Box>
    )
}