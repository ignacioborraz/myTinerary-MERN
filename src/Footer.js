import React from 'react' //importo paquetes de react
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './styles/home.css';

export default class Footer extends React.Component { //generamos un objeto de clase
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <Container maxWidth="xl" sx={{backgroundColor: 'rgb(33, 159, 148)'}}>
                <Typography variant="h6" component="div" sx={{display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '3px', paddingBottom: '3px'}}>
                    designed by insiders who know and love their cities!
                </Typography>
            </Container>
        )
    }
}