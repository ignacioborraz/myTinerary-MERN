//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

//importo los estilos
import '../styles/styles.css'

export default function TinerariesNon () {
    return (
        <>
            <Box sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '200px',
                backgroundColor: 'rgb(242, 245, 200)',
                marginTop: '20px'}}>
                <Typography variant="h6">no <label className='festiveFont bigAnounce'> Tineraries </label> yet!</Typography>
            </Box>
        </>
    )
}