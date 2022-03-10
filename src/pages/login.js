//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'

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
                        <Typography variant='h2'>LOG IN</Typography>
                        <button className='linksHero' onClick={this.changeToin}>{this.state.login ? 'log in!' : this.state.text}</button>
                        <Typography variant='h5' sx={{marginTop: '20px'}}>{this.state.login ? this.state.text1 : this.state.text2}</Typography>
                    </Box>
                    <Footer />
                </Box>
            </Box>
        )
    }
}