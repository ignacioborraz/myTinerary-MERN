import React, {useEffect,useState} from 'react' //importo paquetes de react
import  {getCitiesFromApi} from '../calls'
import '../styles/home.css'
import NavBar from './navBar'
import Footer from './footer'
import {useParams} from 'react-router-dom'

export default function CityCard () {
    return(
        <div className='main'> {/* en cada pagina se rendirza el nav, la infor del cuerpo de cada pagina y el pie de pagina */}
            <div className='colorMain'>
                <NavBar/>
                <div className='info'>
                    <TheCity />
                </div>
                <Footer />
            </div>
        </div>
    )
}

function TheCity () {
    const {id} = useParams()
    const [detailCity, setDetailCity] = useState([])

    useEffect(()=>{ //utilizo el metodo get de axios para llamar a la coleccion de ciudades de la base de datos del servidor
        getCitiesFromApi()
        //.then(response => console.log(response)) //vemos la ruta donde están las ciudades
        .then(response => setDetailCity(response.data.response.cities.filter(cities => cities._id === id)))
    },[id])
    //console.log(detailCity) //chequeamos los datos del filtro
    return ( //returno el HTML
        <>
            <div className='allTheCards'>
                {detailCity?.map(everyCity => (
                    <article key={everyCity._id} className='onlyCard'>
                        <div className="onlyCard-text">
                            <h2 className='textTitle'>{everyCity.city}</h2>
                            <h5 className='onlytextCard'>Country: {everyCity.country}</h5>
                            <h5 className='onlytextCard'>Population: {everyCity.population}</h5>
                        </div>
                        <img className="onlyCard-img" src={process.env.PUBLIC_URL+ `${everyCity.photo}`} alt={everyCity.city} />
                    </article>
                    ))
                }
            </div>
        </>
    )
}