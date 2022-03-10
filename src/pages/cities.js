//importo de librerias externas
import React, {useEffect} from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import Input from '@mui/material/Input';

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Card from '../components/card';

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
        <div className='main'> {/* en cada pagina se rendirza el nav, la infor del cuerpo de cada pagina y el pie de pagina */}
            <div className='colorMain'>
                <NavBar/>
                <div className='info'>
                    <Input onKeyUp={handleInput} placeholder='find your city!' />
                    <Card input={inputFromRedux} cities={citiesFromRedux} />
                </div>
                <Footer />
            </div>
        </div>
    )
}