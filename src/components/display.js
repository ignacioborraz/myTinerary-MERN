//importo de librerias externas
import React from 'react'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

//importo los estilos
import '../styles/styles.css'


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

export default function Display(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(242, 245, 200)',
            padding: '10px',}}>
            <Typography variant="h4">{props.tinDat.itinerary}</Typography>
            <Typography variant="subtitle1">{props.tinDat.description}</Typography>
            <Typography variant="subtitle2">price: {props.tinDat.price} - time: {props.tinDat.time}</Typography>
            <Typography variant="subtitle2">{props.tinDat.tags.join(" , ")}</Typography>
            <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"><ExpandMoreIcon /></ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="subtitle1">ACTIVITIES</Typography>
                <Typography variant="subtitle1">COMENTS</Typography>
            </Collapse>
        </Card>
    );
}