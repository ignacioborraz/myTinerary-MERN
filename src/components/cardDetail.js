//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import Tineraries from './tineraries'
import TinerariesNon from './tinerariesNon';

export default function CardDetail (props) {
    return (
        <>
            <>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '300px',
                    position: 'relative',
                    zIndex: 'tooltip'}}>
                    <Typography variant="h1" className='festiveFont shadows' sx={{paddingTop: '20px'}}>{props.cityDat.city}</Typography>
                    <Typography variant="h5" className='shadows' sx={{paddingTop: '10px'}}>{props.cityDat.country} - {props.cityDat.continent}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '300px',
                    opacity: '0.5',
                    position: 'absolute',
                    zIndex: 'modal'}}>
                    <img src={process.env.PUBLIC_URL+`${props.cityDat.photo}`} alt={props.cityDat.city} className='fitImg' />
                </Box>
            </>
            <>
                {props.tinDat.length > 0 ?
                    <Tineraries tinDat={props.tinDat} /> : <TinerariesNon />
                }
            </>
        </>
    );
}