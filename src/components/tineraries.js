//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import Display from './display'

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
                backgroundColor: 'rgb(242, 245, 200)',
                color: 'rgb(193, 222, 174)',
                marginTop: '20px'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'rgb(33, 159, 148)',
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