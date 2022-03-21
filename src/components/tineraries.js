//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import Display from './display'

//se llama en cardDetail
//llega como props: tinDat (datos de los itinerarios)
export default function Tineraries (props) {
    
    return (
        <>
        {props.tinDat.map( (everyTin) => (
            <Box key={everyTin._id} sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '100%',
                minHeight: '200px',
                backgroundColor: 'rgb(126, 196, 165)',
                color: 'black',
                marginTop: '10px'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'rgb(126, 196, 165)',
                    padding: '10px',}}>
                    <img className="onlyimgCard" src={process.env.PUBLIC_URL+ `${everyTin.userPhoto}`} alt={everyTin.userName} />
                    <Typography variant="h6">{everyTin.userName}</Typography>
                </Box>
                <Display tinDat={everyTin} />
            </Box> 
        ))}
        </>
    )
}