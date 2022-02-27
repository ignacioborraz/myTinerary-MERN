import React from 'react' //importo paquetes de react
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../styles/home.css';
import {Link as LinkRouter} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';


export default class Footer extends React.Component { //generamos un objeto de clase
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <Container maxWidth="xl" sx={{display: 'flex', backgroundColor: 'rgb(33, 159, 148)'}}>
                <LinkRouter to="/home" className='linksCities'>
                    <HomeIcon />
                </LinkRouter>
                <Typography className='textFooter' variant="h6" component="div" sx={{display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '3px', paddingBottom: '3px'}}>
                    designed by insiders who know and love their cities!
                </Typography>
                <LinkRouter to="/cities" className='linksCities'>
                    <FlightIcon />
                </LinkRouter>
            </Container>
        )
    }
}