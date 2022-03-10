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
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import MyCarousel from '../components/carousel'

export default class Home extends React.Component { //generamos un objeto de clase
       
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <> {/* se puede returnar un hijo unico por lo que ese necesari una etiqueta auxiliar padre de los hermanos a renderizar */}
                <div className='home'> {/* para aplicar el fondo */}
                    <div className='backHome'> {/* para aplicar estilos */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '5px'}}>
                            <Typography variant="h2" noWrap className='festiveFont shadows' sx={{marginTop: '60px', marginBottom: '30px'}}>
                                MyTinerary
                            </Typography>
                            <Typography variant='h5'>FIND YOUR PERFECT TRIP</Typography>
                            <Typography variant='h5'>designed by insiders who know and love their cities!</Typography>
                            <LinkRouter to="cities" className='linksHero'>START</LinkRouter>
                        </Box> 
                    </div>
                </div>
                <Box className='main'>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                        textAlign: 'center',
                        alignItems: 'center',
                        width: '100%',
                        minHeight: '100vh',
                        backgroundColor: 'rgb(232, 232, 166, 0.7)'}}>
                        <NavBar/>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: '1',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: '20px'}}>
                            <MyCarousel />
                        </Box>
                        <Footer />
                    </Box>
                </Box>
            </>
        )
    }
}