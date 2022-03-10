//importo de librerias externas
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

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

export default function CityCard () {
    
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
    console.log(tinFromRedux)

    return(
        <div className='main'>
            <div className='colorMain'>
                <NavBar/>
                <div className='info'>
                    <CardDetail cityDat={oneCityFromRedux} tinDat={tinFromRedux} />
                </div>
                <Footer />
            </div>
        </div>
    )
}