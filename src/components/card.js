//importo de librerias externas
import React, {useEffect} from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import Input from '@mui/material/Input';

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'

export default function Card (props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cityActions.filterCities(props.input))
    },[props.input])

    const filterFromRedux = useSelector(store => store.cityReducer.filterCity)
    
    let data = props.input.length>0 ? filterFromRedux : props.cities

    return (
        <div className='allTheCards'>
            {data.length>0 ? 
                data.map(everyCity => (
                    <Flippy key={everyCity._id} flipOnHover={true} flipOnClick={false} flipDirection="horizontal">
                        <FrontSide>
                            <CardFront cities={everyCity}/>
                        </FrontSide>
                        <BackSide>
                            <CardBack cities={everyCity}/>
                        </BackSide>
                    </Flippy>
                ))
            : <><h3>TYPE ANOTHER CITY PLEASE</h3><h5>we didn't find that!</h5></>}
        </div>
    )
}

function CardFront (infoCities) { //definimos la card del frente
    return (
        <article className='cityCard'>
            <h2 className="textCities">{infoCities.cities.city}</h2>
            <img className="imgCities" src={process.env.PUBLIC_URL+ `${infoCities.cities.photo}`} alt={infoCities.cities.city} />
        </article>
    )
}

function CardBack (infoCities) { //definimos la card del reverso
    return(
        <article className='cityCard'>
            <div className="textCitiesReverse">
                <h2 className='textTitle'>{infoCities.cities.city}</h2>
                <LinkRouter to={`/cities/${infoCities.cities._id}`} className='linksCities'>+info</LinkRouter>
            </div>
            <img className="imgCitiesReverse" src={process.env.PUBLIC_URL+ `${infoCities.cities.photo}`} alt={infoCities.cities.city} />
        </article>
    )
}