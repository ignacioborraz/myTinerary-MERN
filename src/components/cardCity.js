//importo de librerias externas
import React, {useEffect} from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Box from '@mui/material/Box'

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'

export default function Cards (props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cityActions.filterCities(props.input))
    },[props.input])

    const filterFromRedux = useSelector(store => store.cityReducer.filterCity)
    
    let data = props.input ? filterFromRedux : props.cities

    return (
        <>
        {data.length>0 ? 
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'}}>
            {data.map( everyCity =>
            <Card key={everyCity._id} sx={{ maxWidth: '450px' , margin: '10px'}}>
                <LinkRouter to={`/cities/${everyCity._id}`}>
                <CardActionArea>
                    <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+`${everyCity.photo}`} alt={everyCity.city} />
                    <CardContent sx={{color: 'rgb(242, 245, 200)', margin: 0, backgroundColor: 'rgb(33, 159, 148)'}}>
                    <Typography variant="h4" gutterBottom component="div" className='festiveFont shadows' sx={{margin: 0}}>{everyCity.city}</Typography>
                    </CardContent>
                </CardActionArea>
                </LinkRouter>
            </Card>
            )}
        </Box> : <><h3>TYPE ANOTHER CITY PLEASE</h3><h5>we didn't find that!</h5></>
        }
        </>
    )
}