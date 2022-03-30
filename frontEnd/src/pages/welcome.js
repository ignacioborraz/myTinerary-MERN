//importo de librerias externas
import React from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

export default class Welcome extends React.Component { //generamos un objeto de clase

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <> {/* se puede returnar un hijo unico por lo que ese necesari una etiqueta auxiliar padre de los hermanos a renderizar */}
                <Box className='welcome'> {/* para aplicar el fondo */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(196, 165, 126, 0.6)',
                            flexGrow: '1'}}>
                            <Typography variant="h1" noWrap className='festiveFont shadows title' sx={{color: 'rgb(165, 126, 196)', padding: '15px', marginBottom: '10px'}}>MyTinerary</Typography>
                            <Typography variant='h4' className='fredokaFont subtitle'>FIND YOUR PERFECT TRIP</Typography>
                            <Typography variant='h6' className='fredokaFont subtitle'>designed by insiders who know and love their cities!</Typography>
                            <Typography variant='subtitle1' sx={{marginTop: '10px'}} className='fredokaFont subtitle'>thanks for signing up</Typography>
                            <LinkRouter to="/login" className='linkWelcome'><Typography variant='h5' className='fredokaFont'>LOG IN!</Typography></LinkRouter>
                        </Box> 
                </Box>
            </>
        )
    }
}