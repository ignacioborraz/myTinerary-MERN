//importo de librerias externas
import React from 'react'

//importo los estilos
import '../styles/styles.css'

import Display from './display'

export default function Tineraries (props) {
    return (
        <div className='tineraryCard'>
        {props.tinDat.map( (everyTin) => (
            <div key={everyTin._id} className='displayCard'>
                <h5 className='onlytextCard'>{everyTin.userName}</h5>
                <h5 className='onlytextCard'>{everyTin.itinerary}</h5>
                <img className="onlyimgCard" src={process.env.PUBLIC_URL+ `${everyTin.userPhoto}`} alt={everyTin.userName} />
                <Display tinDat={everyTin} />
            </div> 
        ))}
        </div>
    )
}