import React from 'react' //importo paquetes de react
import TextCarousel from './carousel'
import '../styles/home.css';

export default class Home extends React.Component { //generamos un objeto de clase
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
        <div className='carousel'>
            <TextCarousel sx={{width: '100%'}}/>
        </div>
        )
    }
}