//importo de librerias externas
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import CardDetail from '../components/cardDetail'

//importo acciones de redux
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'
import tineraryActions from '../redux/actions/tineraryActions'

export default function CityDetail () {
    
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cityActions.oneCity(id))
    },[])

    const oneCityFromRedux = useSelector(store => store.cityReducer.oneCity)
    //console.log(oneCityFromRedux)

    useEffect(() => {
        dispatch(tineraryActions.findFromCity(id))
    },[])

    const tinFromRedux = useSelector(store => store.tineraryReducer.filterTin)
    //console.log(tinFromRedux)

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
                    <CardDetail cityDat={oneCityFromRedux} tinDat={tinFromRedux} />
                </Box>
                <Footer />
            </Box>
        </Box>
    )
}