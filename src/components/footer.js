//importo de librerias externas
import React from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import HomeIcon from '@mui/icons-material/Home'
import FlightIcon from '@mui/icons-material/Flight'

//importo los estilos
import '../styles/styles.css'

export default class Footer extends React.Component { //generamos un objeto de clase
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <Container maxWidth="100%" sx={{display: 'flex', backgroundColor: '#a57ec4', color: 'white'}}>
                <LinkRouter to="/home">
                    <HomeIcon sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)', margin: '10px'}} />
                </LinkRouter>
                <Typography className='fredokaFont footer' variant="h6" sx={{display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '3px', paddingBottom: '3px'}}>
                    designed by insiders who know and love their cities!
                </Typography>
                <LinkRouter to="/cities">
                    <FlightIcon sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)', margin: '10px'}} />
                </LinkRouter>
            </Container>
        )
    }
}