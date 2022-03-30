//importo de librerias externas
import React, {useState} from 'react'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import {IconButton} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import GoogleIcon from '@mui/icons-material/Google'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import FacebookSignIn from '../components/faceSignup'

//importo acciones de redux
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'

function SignUp(props) {
    
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [userPhoto,setUserPhoto] = useState("")
    const [country,setCountry] = useState("")
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")

    var countries = ["","Mexico","U.S.A.","Brazil","Argentina","Tailandia","China","Singapur","Japan","Spain","England","France","Italy","Fiyi","Autralia","New Zealand","Marshall Islands","Other Country"]

    const handleSubmit = (event) => {
        event.preventDefault() //prevenimos la accion del submit
        const userData = {
			name: name,
            lastName: lastName,
            userPhoto: userPhoto,
            country: country,
            email: mail,
			password: pass,
			from: "SignUpForm"
		}
        props.signUpUser(userData)
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
                        <Typography variant="h2" className='festiveFont violetShadows' sx={{padding: '10px'}}>Register Form</Typography>
                        <form onSubmit={handleSubmit} className='w100'>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px'}}>
                                <label htmlFor="name">
                                <PersonIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='name' id='name' placeholder='first name' className='myInput' value={name} onChange={e=>setName(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="lastName">
                                <PersonIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='lastName' id='lastName' placeholder='last name' className='myInput' value={lastName} onChange={e=>setLastName(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="userPhoto">
                                <PhotoCameraIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='userPhoto' id='userPhoto' placeholder="photo's URL" className='myInput' value={userPhoto} onChange={e=>setUserPhoto(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="country">
                                <LocationCityIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <select name="country" id="country" className='myInput' onChange={e=>setCountry(e.target.value)} required>
                                    {countries.map( everyCountry =>
                                    <option key={everyCountry} value={everyCountry}>{everyCountry}</option>)}
                                </select>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
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
                                <input type='password' name='password' id='password' placeholder='password' className='myInput' value={pass} onChange={e=>setPass(e.target.value)} required/>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                height: '40px',
                                width: '40%',
                                minWidth: '280px',
                                marginTop: '10px'}}>
                                <IconButton sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)'}}>
                                    <GoogleIcon />
                                </IconButton>
                                <button type="submit" className='myButton'>sign up!</button>
                                <LinkRouter to={'/login'} className='anchor festiveFont violetShadows'>Log in!</LinkRouter>
                                <FacebookSignIn />
                            </Box>
                        </form>
                    </>
                </Box>
                <Footer />
            </Box>
        </Box>
        )
}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)