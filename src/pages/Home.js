//home es la pantala de inicio
//esta compuesta por una primer pantalla con una imagen, el logo, el eslogan y el botón para ir a ciudades
//bajando hay una segunda pantalla que tiene un carousel con las ciudades mas buscadas
//el mockup de esta segunda pantalla se utiliza en las siguientes pestañas

//está pensada para que el usuario no necesite desplazarse lateral ni longitudinalmente (salvo una medida que no la pude resolver y quedaba muy mal si la achicaba mas)
//la webapp es 90% responsivo ya que tiene algunos destalles que en algunas pantallas no funcionan bien

//importo de librerias externas
import React from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import MyCarousel from './carousel'

export default class Home extends React.Component { //generamos un objeto de clase

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <> {/* se puede returnar un hijo unico por lo que ese necesari una etiqueta auxiliar padre de los hermanos a renderizar */}
                <Box className='home'> {/* para aplicar el fondo */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            backgroundColor: 'rgba(196, 165, 126, 0.4)',
                            flexGrow: '1'}}>
                            <Typography variant="h1" noWrap className='festiveFont shadows title' sx={{color: 'rgb(165, 126, 196)', padding: '15px', marginTop: '50px', marginBottom: '10px'}}>MyTinerary</Typography>
                            <Typography variant='h5' className='fredokaFont subtitle'>FIND YOUR PERFECT TRIP</Typography>
                            <Typography variant='h5' className='fredokaFont subtitle'>designed by insiders who know and love their cities!</Typography>
                            <LinkRouter to="cities" className='linksHero'><Typography variant='h5' className='fredokaFont button'>START!</Typography></LinkRouter>
                            <LinkRouter to="cities" className='linksHero'><Typography variant='h5' className='fredokaFont button'>LOG IN!</Typography></LinkRouter>
                        </Box> 
                </Box>
                <MyCarousel />
            </>
        )
    }
}