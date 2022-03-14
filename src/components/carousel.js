//importo de librerias externas
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

export default function MyCarousel () {
    var citiesOfTheWorld = [{
        continent: "AMERICA", 
        cities: [
            {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
            {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
            {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
            {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
        ]},{
        continent: "ASIA", 
        cities: [
            {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
            {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
            {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
            {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
        ]},{
        continent: "EUROPE", 
        cities: [
            {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
            {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
            {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
            {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
        ]},{
        continent: "OCEANIA", 
        cities: [
            {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
            {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
            {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
            {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"},
        ]}
    ]

    return (
        <Carousel sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90vw',
            height: '80vh'}}>
            {citiesOfTheWorld.map( (everyContinent) => ( /* mapeamos los continentes */
                <Box key={everyContinent.continent} sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'}}>
                    {everyContinent.cities.map((everyCity) => ( /* mapeamos las ciudades */
                            <>
                            <Box key={everyCity.id} className='wrapCarousel'> {/* configuramos el renderizado de cada card */}
                                <Typography variant="h2" className='festiveFont shadows fitImg absolute wrapCarousel' sx={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40vw',
                                    height: '35vh',
                                    backgroundColor: 'rgba(126, 196, 165, 0.2)',
                                    padding: '0.5vh',
                                    margin: '0.5vh'}}>
                                    {everyCity.city}
                                </Typography>
                                <Box className='wrapCarousel relative' sx={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40vw',
                                    height: '35vh',
                                    opacity: '0.9',
                                    padding: '0.5vh',
                                    margin: '0.5vh'}}>
                                    <img src={process.env.PUBLIC_URL+ `${everyCity.photo}`} alt={everyCity.city} className='fitImg' />
                                </Box>
                            </Box>
                            </>
                    ))}
                </Box>
            ))}
        </Carousel>
    )
}