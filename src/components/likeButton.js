//importo de librerias externas
import React, {useEffect, useState} from 'react'
import Badge from '@mui/material/Badge'
import {styled} from '@mui/material/styles'
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
        console.log(props.tinDat._id);
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
                    <StyledBadge sx={{color:"black"}}> 
                    {likes.includes(props.user.id) ?
                        <FavoriteIcon /> :
                        <FavoriteBorderIcon />}
                        <Typography sx={{paddingLeft: '8px'}}>{likes.length} likes</Typography>
                    </StyledBadge>
                </IconButton> :
                <IconButton onClick={() => console.log('connect!')}  aria-label="cart">
                    <StyledBadge sx={{color:"black"}}> 
                        <FavoriteBorderIcon />
                        <Typography sx={{paddingLeft: '8px'}}>{likes.length} likes</Typography>
                    </StyledBadge>
                </IconButton>
            }
        </>
    )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const mapDispatchToProps = {
    likeDislike: tineraryActions.likeDislike,
    oneTinerary: tineraryActions.oneTinerary
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        oneTin: state.tineraryReducer.oneTin
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)