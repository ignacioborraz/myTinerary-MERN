//importo de librerias externas
import React, {useEffect,useState} from 'react'
import  {getCitiesFromApi} from '../calls'
import {useParams} from 'react-router-dom'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'

export default function CityCard () {
    return(
        <div className='main'>
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

    useEffect(()=>{
        getCitiesFromApi()
        //.then(response => console.log(response)) //vemos la ruta donde están las ciudades
        .then(response => setDetailCity(response.data.response.cities.filter(cities => cities._id === id)))
    },[id])
    //console.log(detailCity) //chequeamos los datos del filtro
    return (
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