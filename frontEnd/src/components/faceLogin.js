//importo de librerias externas
import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookIcon from '@mui/icons-material/Facebook'
import {IconButton} from '@mui/material'

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'

function FacebookSignIn(props) {
    const responseFacebook = async (res) => {
        //console.log(res);
        const userLogin = {
            email: res.email,
            password: res.id,
            from: "facebook",
            userPhoto: res.picture.data.url
        }
        //console.log(userLogin);
        await props.logInUser(userLogin)
    }
    return (
        <FacebookLogin
            appId = "286178143669290"
            autoLoad = {false}
            fields = "name,email,id,picture"
            callback = {responseFacebook}
            render = { renderProps => (
                <>
                <IconButton onClick={renderProps.onClick} sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <FacebookIcon />
                </IconButton>
                </>
            )}
        />
    )
}

const mapDispatchToProps = {
    logInUser: userActions.logInUser
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookSignIn)