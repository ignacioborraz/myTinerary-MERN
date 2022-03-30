//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import Tineraries from './tineraries'
import TinerariesNon from './tinerariesNon';

//se llama en cityDetail
//llegan como props: cityDat (datos de esa ciudad) y tinDat (datos de los itinerarios)
export default function CardDetail (props) {
    
    return (
        <>
            <>
                <Box className='fitImg absolute' sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '300px',
                    backgroundColor: 'rgba(126, 196, 165, 0.4)'}}>
                    <Typography variant="h1" className='festiveFont shadows' sx={{paddingTop: '20px'}}>{props.cityDat.city}</Typography>
                    <Typography variant="h5" className='fredokaFont shadows' sx={{paddingTop: '10px'}}>{props.cityDat.country} - {props.cityDat.continent}</Typography>
                </Box>
                <Box className='relative' sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '300px'}}>
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