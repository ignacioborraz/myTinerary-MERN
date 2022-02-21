import React from 'react' //importo paquetes de react
import './styles/home.css';
import {Link as LinkRouter} from "react-router-dom"
import { Typography } from '@mui/material';

export default class Home extends React.Component { //generamos un objeto de clase
       
    render() { //al objeto le definimos un metodo que imprime en HTML
        function noBg () {
            document.querySelector('.home').style.display = 'none'
            document.querySelector('.backHome').style.height = '100vh'
        }
        return ( //returno el HTML
            <div className='home'>
                <div className='backHome'>
                    <div className='linksHero'>
                        <LinkRouter to="Cities" onClick={noBg}>CITIES</LinkRouter>
                        <LinkRouter to="Login" onClick={noBg}>LOGIN</LinkRouter>
                    </div>
                    <div>
                        <Typography variant="h6" noWrap component="div" className='titles' sx={{flexGrow:'1', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            MyTinerary
                        </Typography>
                        <h3 className='subtitles'>
                            <p className='subtitles'>FIND YOUR PERFECT TRIP</p>
                            <p className='subtitles'>designed by insiders who know and love their cities!</p>
                        </h3> 
                    </div>
                </div>
            </div>
        )
    }
}