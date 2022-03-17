/* 


function MySnackBar(props) {

    return (
        <div>
            {props.snackbar.view === true && (
                <Snackbar
                    
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    open={props.snackbar.view}
                    onClose={handleClose}
                    autoHideDuration={10000}>
                    <>
                      {(typeof props.snackbar.message) === "string" ?
                          (<p>{props.snackbar.message}</p>) :
                          <ul>{props.snackbar.message.map(message =><li>{message.message}</li>)}</ul>
                      }
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                          <CloseIcon fontSize="small" />
                      </IconButton>
                   </>
              </Snackbar>
            )}
        </div>
    )
}; */




//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'

function MySnackBar(props) {
    //console.log(props)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch({
            type: 'message',
            payload: {view: false, message: '', success: false}
        })
    }
    const action = (
        <Box className='fredokaFont' sx={{
            width: '100%',
            backgroundColor: props.snackbar.success ? 'rgb(165, 126, 196)':'rgb(196, 165, 126)',
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: '400'}}>
            {(typeof props.snackbar.message) === "string" ?
                (<p>{props.snackbar.message}</p>) :
                <div>{props.snackbar.message.map((message,index) =><p key={index}>{message.message}</p>)}</div>
            }

        </Box>
    )
    return (
        <Snackbar
            open={props.snackbar.view}
            autoHideDuration={10000}
            onClose={handleClose}
            action={action}
            message={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            } />
    )
}

const mapStateToProps = (state) => {
    return {
        snackbar: state.userReducer.snackbar,
    }
}

export default connect(mapStateToProps, null)(MySnackBar)