//importo de librerias externas
import React from 'react'
import {IconButton} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function LoginFacebook() {

    const handleSubmit = (event) => {
		event.preventDefault() //prevenimos la accion del submit
		console.log(event.target) //consoleamos para saber donde están los valores que necesitamos enviar
        const logedUser = {
            email: event.target[0].value,
			password: event.target[1].value,
			from: "LogInForm"
		}
		//aca llamo a la accion props.signInUser(logedUser) //configuro: controladores, luego acciones, luego reductores
	}

    return ( //returno el HTML
        <IconButton sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)'}}>
            <FacebookIcon />
        </IconButton>
    )
}