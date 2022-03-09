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
                    <ReduxCities input={inputFromRedux} cities={citiesFromRedux} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

function ReduxCities (props) {
    console.log(props);
    //console.log(props.input) //verifico
    //console.log(props.cities) //verifico
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cityActions.filterCities(props.input))  //despacho la obtencion de ciudades
    },[props.input])

    const filterFromRedux = useSelector(store => store.cityReducer.filterCity) //defino una variable con las ciudades del store
    
    let data = props.input.length>0 ? filterFromRedux : props.cities
    
    //console.log(data)
    //console.log(input.cities) //verifico
    //console.log(filterFromRedux) //verifico

    return ( //returno el HTML
        <>
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
        </>
    )
}




function TheCities (props) {
    console.log(props);
    const filterFromRedux = useSelector(store => store.cityReducer.filterCities)
    var data = {filterFromRedux}.length>0 ? {filterFromRedux} : props.inputSearch === "" ? props.cities : []
    return ( //returno el HTML
        <>
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
        </>
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
                <h5 className='textCard'>Country: {infoCities.cities.country}</h5>
                <h5 className='textCard population'>Population: {infoCities.cities.population}</h5>
                <LinkRouter to={`/cities/${infoCities.cities._id}`} className='linksCities'>+info</LinkRouter>
            </div>
            <img className="imgCitiesReverse" src={process.env.PUBLIC_URL+ `${infoCities.cities.photo}`} alt={infoCities.cities.city} />
        </article>
    )
}