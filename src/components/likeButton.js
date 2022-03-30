//importo de librerias externas
import React, {useEffect, useState} from 'react'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {Typography} from '@mui/material'

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {connect} from 'react-redux'
import tineraryActions from '../redux/actions/tineraryActions'

//se llama en display
//llega como props: tinDat (datos de los itinerarios) y user
function LikeButton(props) {
    const [likes,setLikes] = useState(props.tinDat.likes)
    const [reload,setReload] = useState(false)

    useEffect(() => {
        props.oneTinerary(props.tinDat._id)
            .then(response => setLikes(response.likes))
    }, [!reload])

    async function toLike() {
        //console.log(props.tinDat._id);
        await props.likeDislike(props.tinDat._id)
        setReload(!reload)
    }

/*  METODO ALTERNATIVO   
    const [likes,setLikes] = useState(props.tinDat.likes)

    async function toLike() {
        console.log(props.tinDat._id);
        await props.likeDislike(props.tinDat._id)
        await props.oneTinerary(props.tinDat._id)
            .then(response => setLikes(response.likes))
    } */

    return (
        <>
            {props.user ?
                <IconButton onClick={toLike} aria-label="cart">
                {likes.includes(props.user.id) ?
                    <FavoriteIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/> :
                    <FavoriteBorderIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>}
                    <Typography sx={{color: 'black', paddingLeft: '5px'}}>{likes.length} likes</Typography>
                </IconButton> :
                <IconButton aria-label="cart">
                    <FavoriteBorderIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', margin: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                    <Typography sx={{color: 'black', paddingLeft: '5px'}}>{likes.length} likes</Typography>
                </IconButton>
            }
        </>
    )
}

const mapDispatchToProps = {
    likeDislike: tineraryActions.likeDislike,
    oneTinerary: tineraryActions.oneTinerary
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)