import React from 'react';
import '../styles/home.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export default function TextCarousel (props) {
    var citiesOfTheWorld = [{
        continent: "AMERICA", 
        cities: [
            {city: "CANCUN", photo: "img/america/cancun.jpg"},
            {city: "NEW YORK", photo: "img/america/newyork.jpg"},
            {city: "RIO DE JANEIRO", photo: "img/america/rioDeJaneiro.jpg"},
            {city: "USHUAIA", photo: "img/america/ushuaia.jpg"},
        ]},{
        continent: "ASIA", 
        cities: [
            {city: "BANGKOK", photo: "img/asia/bangkok.jpg"},
            {city: "PEKIN", photo: "img/asia/pekin.jpg"},
            {city: "SINGAPUR", photo: "img/asia/singapur.jpg"},
            {city: "TOKIO", photo: "img/asia/tokio.jpg"},
        ]},{
        continent: "EUROPE", 
        cities: [
            {city: "IBIZA", photo: "img/europe/ibiza.jpg"},
            {city: "LONDON", photo: "img/europe/london.jpg"},
            {city: "PARIS", photo: "img/europe/paris.jpg"},
            {city: "ROMA", photo: "img/europe/roma.jpg"},
        ]},{
            continent: "OCEANIA", 
            cities: [
                {city: "MAJURO", photo: "img/oceania/majuro.jpg"},
                {city: "SIDNEY", photo: "img/oceania/sidney.jpg"},
                {city: "SUVA", photo: "img/oceania/suva.jpg"},
                {city: "WELLINGTON", photo: "img/oceania/wellington.jpg"},
            ]}
    ]
/*     return (
        <Carousel sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , width: '70%', height: '80%'}}>
            {items.map( (item, i) => <Item key={i} item={item} /> )}
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                MAS INFO!
            </Button>
        </Paper>
    )
}
 */
return (
    <Carousel sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center' , width: '100%'}}>
        {citiesOfTheWorld.map( (everyContinent, i) => <PrintContinents index={i} continent={everyContinent.cities} /> )}
    </Carousel>
)
}

function PrintContinents(props) {
return (
    <Paper sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        {props.continent.map( (everyCity,i) => <PrintCities key={props.index + i} cities={everyCity} /> )}
    </Paper>
)
}

function PrintCities(props) {
    return (
        <article sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h4 sx={{position: 'relative', top: '50%', left: '50%'}}>{props.cities.city}</h4>
            <img src={process.env.PUBLIC_URL+ `/${props.cities.photo}`} alt={props.cities.city} className="cities" />
        </article>
    )
}