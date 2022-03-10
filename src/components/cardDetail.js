import * as React from 'react';
import Tineraries from './tineraries';

export default function CardDetail (props) {
  return (
    <>
        <div className="onlyCard-text">
            <h2 className='textTitle'>{props.cityDat.city}</h2>
            <h5 className='onlytextCard'>Country: {props.cityDat.country}</h5>
            <h5 className='onlytextCard'>Population: {props.cityDat.population}</h5>
            {props.tinDat.length > 0 ?
                <Tineraries tinDat={props.tinDat} /> : <h5>NO TINERARIES YET!</h5>
            }
        </div>
        <img className="onlyCard-img" src={process.env.PUBLIC_URL+`${props.cityDat.photo}`} alt={props.cityDat.city} />
    </>
  );
}