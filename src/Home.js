//home es la pantala de inicio
//esta compuesta por una primer pantalla con una imagen, el logo, el eslogan y el botón para ir a ciudades
//bajando hay una segunda pantalla que tiene un carousel con las ciudades mas buscadas
//el mockup de esta segunda pantalla se utiliza en las siguientes pestañas

//está pensada para que el usuario no necesite desplazarse lateral ni longitudinalmente (salvo una medida que no la pude resolver y quedaba muy mal si la achicaba mas)
//la webapp es 90% responsivo ya que tiene algunos destalles que en algunas pantallas no funcionan bien

import React from 'react' //importo paquetes de react
import './styles/home.css'; //importo CSS
import {Link as LinkRouter} from "react-router-dom" //importo el buscador de rutas
import { Typography } from '@mui/material'; //importo componentes de una libreria
import MyCarousel from './components/carousel'; //importo componentes creados con REACT

export default class Home extends React.Component { //generamos un objeto de clase
       
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <> {/* se puede returnar un hijo unico por lo que ese necesari una etiqueta auxiliar padre de los hermanos a renderizar */}
                <div className='home'> {/* para aplicar el fondo */}
                    <div className='backHome'> {/* para aplicar estilos */}
                        <Typography variant="h6" noWrap component="div" className='titleIndex' sx={{flexGrow:'1', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                            MyTinerary
                        </Typography>
                        <h3 className='subtitles'>
                            <p className='subtitles'>FIND YOUR PERFECT TRIP</p>
                            <p className='subtitles'>designed by insiders who know and love their cities!</p>
                            <LinkRouter to="cities" className='linksHero'>START</LinkRouter>
                        </h3> 
                    </div>
                </div>
                <MyCarousel />
            </>
        )
    }
}