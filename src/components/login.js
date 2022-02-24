import React from 'react' //importo paquetes de react
import NavBar from './navBar' //importo el nav
import Footer from './footer';
import '../styles/home.css';

export default class LogIn extends React.Component { //generamos un objeto de clase
    
    constructor(props) { //utilizamos un constructor que va a depender de propiedades
        super(props) //super hace referencia al constructor de la clase base (en este caso un componente de react)
            this.state = { //defino las propiedades de ESTE constructor (ESTADO)
                login: true,
                text: "log out!",
            }
    }
    changeToin = () => { //al objeto le definimos un metodo que cambia propiedades
        this.setState({ //seteamos(modificamos/configuramos) ESTE constructor ESTADO
            login: !this.state.login,
            text1: "log in please!",
            text2: "thanks for log in!"
        })

    }

    render() { //al objeto le definimos un metodo que imprime en HTML
        return ( //returno el HTML
            <div className='main'> {/* en cada pagina se rendirza el nav, la infor del cuerpo de cada pagina y el pie de pagina */}
                <div className='colorMain'>
                    <NavBar/> {/* llamamos al nav */}
                    <div className='info'>
                        <h1>LOG IN</h1>
                        <button onClick={this.changeToin}>{this.state.login ? 'log in!' : this.state.text}</button>
                        <p><b>{this.state.login ? this.state.text1 : this.state.text2}</b></p>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}