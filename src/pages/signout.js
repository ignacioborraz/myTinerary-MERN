/* //importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import SignupForm from '../components/signupForm'

export default function SignUp() {
    return ( //returno el HTML
        <Box className='main main-back-sign'>
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
                    marginTop: '10px',
                    marginBottom: '10px'}}>
                    <SignupForm />
                    <button className='linksHero' >log in!</button>
                </Box>
                <Footer />
            </Box>
        </Box>
    )
} */