//importo de librerias externas
import React, {useState} from 'react'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import {IconButton} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import MySnackBar from '../components/snackBar'
import FacebookSignIn from '../components/faceLogin'

//importo acciones de redux
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'

function LogIn(props) {
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault() //prevenimos la accion del submit
        const userLogin = {
            email: mail,
			password: pass,
			from: "LogInForm"
		}
        props.logInUser(userLogin)
    }
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '10px',
                    marginBottom: '10px'}}>
                    <>
                        <Typography variant="h2" className='festiveFont violetShadows' sx={{padding: '10px'}}>Welcome!</Typography>
                        <form onSubmit={handleSubmit} className='w100'>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px'}}>
                                <label htmlFor="email">
                                    <MailIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='email' name='email' id='email' placeholder='mail' className='myInput' value={mail} onChange={e=>setMail(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="password">
                                    <KeyIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='password' name='password' id='password' placeholder='password' className='myInput' value={pass} onChange={e=>setPass(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                height: '40px',
                                width: '40%',
                                minWidth: '280px',
                                marginTop: '10px'}}>
                                <IconButton sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)', height: '40px'}}>
                                    <GoogleIcon />
                                </IconButton>
                                <input type="submit" value='log in!' className='myButton fredokaFont' required />
                                <LinkRouter to={'/signup'} className='anchor festiveFont violetShadows'>
                                    Sign up!
                                </LinkRouter>
                                <FacebookSignIn />
                            </Box>
                        </form>
                    </>
                    
                    <MySnackBar />
                </Box>
                <Footer />
            </Box>
        </Box>
        )
}

const mapDispatchToProps = {
    logInUser: userActions.logInUser
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)