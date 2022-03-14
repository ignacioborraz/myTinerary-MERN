//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import LoginForm from '../components/loginForm'

export default function LogIn() {
        return ( //returno el HTML
            <Box className='main main-back-log'>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    textAlign: 'center',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: 'rgb(232, 232, 166, 0.5)'}}>
                    <NavBar/>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                        textAlign: 'center',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: '20px'}}>
                        <LoginForm />
                        <button className='linksHero' >log in!</button>
                    </Box>
                    <Footer />
                </Box>
            </Box>
        )
}