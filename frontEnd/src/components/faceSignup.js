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

function FacebookSignUp(props) {
    const responseFacebook = async (res) => {
        const arrayName = res.name.split(" ")
        //console.log(res)
        const userData = {
            name: arrayName[0],
            lastName: arrayName[arrayName.length-1],
            email: res.email,
            password: res.id,
            userPhoto: res.picture.data.url,
            from: "facebook",
            country: "arg"
        }
        //console.log(userData)
        await props.signUpUser(userData)
    }
    return (
        <FacebookLogin
            appId = "286178143669290"
            autoLoad = {false}
            fields = "name,email,id,picture"
            callback = {responseFacebook}
            render = { renderProps => (
                <>
                <IconButton onClick={renderProps.onClick}  sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <FacebookIcon />
                </IconButton>
                </>
            )}
        />
    )
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookSignUp)