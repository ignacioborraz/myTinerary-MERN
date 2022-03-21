//importo de librerias externas
import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {useDispatch, useSelector} from 'react-redux'
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
export default function Display(props) {
    console.log(props)

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(activityActions.findActFromTin(props.tinDat._id))
    },[])
    const actsFromRedux = useSelector(store => store.activityReducer.filterAct)
    console.log(actsFromRedux)

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
            padding: '10px',}}>
            <Typography variant="h4">{props.tinDat.itinerary}</Typography>
            <Typography variant="subtitle1">{props.tinDat.description}</Typography>
            <Typography variant="subtitle2">price: {props.tinDat.price} - time: {props.tinDat.time}</Typography>
            <Typography variant="subtitle2">{props.tinDat.tags.join(" , ")}</Typography>
            <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"><ExpandMoreIcon /></ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'}}>
                    {actsFromRedux?.map( everyAct =>
                        <div key={everyAct._id}>
                            <Box className='fitImg absolute' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '270px',
                                height: '180px',
                                backgroundColor: 'rgba(126, 196, 165, 0.4)',
                                margin: '5px',
                                marginTop: '10px'}}>
                                <Typography variant="h2" className='festiveFont shadows' sx={{color: 'black'}}>{everyAct.activity}</Typography>
                            </Box>
                            <Box className='relative' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '270px',
                                height: '180px',
                                margin: '5px',
                                marginTop: '10px'}}>
                                <img src={process.env.PUBLIC_URL+`${everyAct.actPhoto}`} alt={everyAct.activity} className='fitImg' />
                            </Box>
                        </div>
                    )}
                </Box>
                <Typography variant="subtitle1">COMENTS</Typography>
            </Collapse>
        </Card>
    );
}