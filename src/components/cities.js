import React, {useEffect,useState} from 'react' //importo paquetes de react
import  {getCitiesFromApi} from '../calls'
import '../styles/home.css'
import {Link as LinkRouter} from "react-router-dom" //importo el buscador de rutas
import NavBar from './navBar'
import Footer from './footer'
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import Input from '@mui/material/Input';

export default function Cities () {
    const [inputSearch, setInputSearch] = useState("") //defino la variable del input del buscador  
    return(
        <div className='main'> {/* en cada pagina se rendirza el nav, la infor del cuerpo de cada pagina y el pie de pagina */}
            <div className='colorMain'>
                <NavBar/>
                <div className='info'>
                    <Input onKeyUp={event => setInputSearch(event.target.value)} placeholder='find your city!' />
                    <TheCities inputSearch={inputSearch} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

function TheCities (props) {
    //console.log(props) //verifico la carga

    const [apiCities, setApiCities] = useState([]) //seteo la api con las ciudades
    //para utilizar y requerir datos de la base es necesario que el backEnd esté "iniciado"    
    
    useEffect(()=>{ //utilizo el metodo get de axios para llamar a la coleccion de ciudades de la base de datos del servidor
        getCitiesFromApi() //utilizo el controlador para obtener las ciudades de la api
        //.then(response => console.log(response)) //vemos la ruta donde están las ciudades
        .then(response => setApiCities(response.data.response.cities))
    },[])
    //console.log(apiCities) //chequeamos los datos de la api

    const [filterCities, setFilterCities] = useState([]) //no funciona esta variable

    useEffect(()=>{ //utilizo el metodo get de axios para llamar a la coleccion de ciudades de la base de datos del servidor
        getCitiesFromApi()
        //.then(response => console.log(response)) //vemos la ruta donde están las ciudades
        .then(response => setFilterCities(response.data.response.cities.filter(cities => cities.city.toLowerCase().startsWith(props.inputSearch.toLowerCase().trim()))))
    },[props.inputSearch])
    //console.log(filterCities) //chequeamos los datos del filtro

    var data = filterCities.length>0 ? filterCities : props.inputSearch === "" ? apiCities : []

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
            : <h3>NO ENCONTRAMOS SU DESTINO</h3>}
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