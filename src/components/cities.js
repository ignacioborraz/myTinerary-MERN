import React from 'react' //importo paquetes de react
import '../styles/home.css'
import NavBar from './navBar'
import Footer from './footer'
import citiesOfTheWorld from './citiesOfTheWorld'
import Flippy, {FrontSide, BackSide} from 'react-flippy';

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
            {console.log(infoCities.cities)}
            <div className="textCitiesReverse">
                <h2 className='textTitle'>{infoCities.cities.city}</h2>
                <h5 className='textCard'>Country: {infoCities.cities.country}</h5>
                <h5 className='textCard'>Population: {infoCities.cities.population}</h5>
            </div>
            <img className="imgCitiesReverse" src={process.env.PUBLIC_URL+ `${infoCities.cities.photo}`} alt={infoCities.cities.city} />
        </article>
    )
}

function TheCities () { //generamos un objeto de clase
    return ( //returno el HTML
        citiesOfTheWorld.cities.map(everyCity => (
            <Flippy key={everyCity.id} flipOnHover={true} flipOnClick={false} flipDirection="horizontal" /* ref={(r) => this.flippy = r} */>
                <FrontSide>
                    <CardFront cities={everyCity}/>
                </FrontSide>
                <BackSide>
                    <CardBack cities={everyCity}/>
                </BackSide>
                {console.log(everyCity)}
            </Flippy>
        ))
    )
}



/* cluster de conexion
mongodb+srv://ijb9790:<password>@cluster0.aghfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority */
/* bajas el mongo db en el visual

click en la extension de la hojita en la barra lateral

conect

pegas lo que copiaste de atlas y a eso le cambias la contraseña y el nombre del cluster */

export default function Cities () {
    return (
        <div className='main'> {/* en cada pagina se rendirza el nav, la infor del cuerpo de cada pagina y el pie de pagina */}
            <div className='colorMain'>
                <NavBar/>
                    <TheCities className='cards' />    
                <Footer />
            </div>
        </div>
    )
}