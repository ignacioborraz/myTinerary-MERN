//importo de librerias externas
import React, {useEffect, useState} from 'react'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

//importo los estilos
import '../styles/styles.css'

//importo componentes locales
import Activities from './activities'
import LikeButton from './likeButton'
import Comments from './comments'

//importo acciones de redux
import {connect} from 'react-redux'
import activityActions from '../redux/actions/activityActions'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
  }),
}));

//se llama en tineraries
//llega como props: tinDat (datos de los itinerarios)
function Display(props) {

    const [activity,setActivity] = useState([])
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        props.findActFromTin(props.tinDat._id).then(res => {
            setActivity(res.response)
    })},[])

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(207, 238, 228)',
            padding: '10px',
            width: '100%'}}>
            <Typography variant="h2" className='festiveFont'>{props.tinDat.itinerary}</Typography>
            <Typography variant="subtitle1" className='fredokaFont'>{props.tinDat.description}</Typography>
            <Typography variant="subtitle2" className='fredokaFont'>price: {props.tinDat.price} - time: {props.tinDat.time}</Typography>
            <Typography variant="subtitle2" className='fredokaFont'>{props.tinDat.tags.join(" , ")}</Typography>
            <CardActions disableSpacing>
                <LikeButton tinDat={props.tinDat} />
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{width: '80%'}} className='width60'>
                <Activities activities={activity} />
                <Typography variant="h5" className='fredokaFont' sx={{margin: '16px', padding: '8px', textAlign: 'center', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>comments</Typography>
                <Comments tinDat={props.tinDat} />
            </Collapse>
        </Card>
    )
}

const mapDispatchToProps = {
    findActFromTin: activityActions.findActFromTin,
}

export default connect(null, mapDispatchToProps)(Display)