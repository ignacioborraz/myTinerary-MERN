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

function GoogleSignUp(props) {
    const responseGoogle = async (res) => {
        console.log(res)
        const userData = {
            //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
            name: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            userPhoto: res.profileObj.imageUrl,
            from: "google",
            country: "arg"
        }
        console.log(userData)
        await props.signUpUser(userData)
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
  signUpUser: userActions.signUpUser
}

export default connect(null, mapDispatchToProps)(GoogleSignUp)