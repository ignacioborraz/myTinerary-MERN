//importo de librerias externas
import React from 'react'
import GoogleLogin from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google'
import {IconButton} from '@mui/material'

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'

function GoogleSignIn(props) {
    const responseGoogle = async (res) => {
        //console.log(res);
        const userLogin = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            from: "google",
            userPhoto: res.profileObj.imageUrl,
        }
        //console.log(userLogin);
        await props.logInUser(userLogin)
    }
    return (
        <GoogleLogin
            /*fields = "name,email,id,picture"*/
            clientId="518590523317-2quk5u9mpu31em2iau97v263i7dad01a.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render = { renderProps => (
                <>
                <IconButton onClick={renderProps.onClick} sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <GoogleIcon />
                </IconButton>
                </>
            )}
        />
    )
}

const mapDispatchToProps = {
    logInUser: userActions.logInUser
}

export default connect(null, mapDispatchToProps)(GoogleSignIn)