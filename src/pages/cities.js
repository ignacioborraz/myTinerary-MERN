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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const dispatch = useDispatch() //este metodo sirve para despachar acciones al store

    useEffect(() => {
        dispatch(cityActions.getCities()) //despacho la obtencion de ciudades
    },[])
    const citiesFromRedux = useSelector(store => store.cityReducer.cities) //defino una variable con las ciudades del store
    //console.log(citiesFromRedux)

    const [input,setInput] = useState("")

    return (
        <Box className='main main-back'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh',
                backgroundColor: 'rgb(126, 196, 165, 0.5)'}}>
                <NavBar/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    marginTop: '10px',
                    marginBottom: '10px'}}>
                    <Input onKeyUp={event => setInput(event.target.value)} placeholder='find your city!' sx={{width: '280px', padding: '10px'}} />
                    <Cards input={input} cities={citiesFromRedux} />
                    </Box>
                <Footer />
            </Box>
        </Box>
    )
}