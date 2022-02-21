import React from 'react' //importo paquetes de react
import NavBar from './navBar' //importo el nav
import Footer from '../Footer';
import '../App.css';

export default class Cities extends React.Component { //generamos un objeto de clase
    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <div className='main'>
                <NavBar/> {/* llamamos al nav */}
                <div className='info'>
                    <h1>CITIES OF THE WORLD</h1>
                    <h2>SEE MORE NEXT WEEK!</h2>    
                </div>
                <Footer />
            </div>
        )
    }
}