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
        justifyContent: 'space-evenly'}}>
            {data.map( everyCity =>
            <Card key={everyCity._id} sx={{width: '45vw', height: '32vw', marginTop: '10px'}} className='cityCards' >
                <LinkRouter to={`/cities/${everyCity._id}`}>
                <CardActionArea>
                    <CardMedia component="img" sx={{height: '26vw'}} image={process.env.PUBLIC_URL+`${everyCity.photo}`} alt={everyCity.city} className='imgCards' />
                    <CardContent sx={{height: '6vw', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(196, 165, 126)'}} className='labelCards' >
                    <Typography variant="h3" gutterBottom component="div" className='festiveFont shadows textCards' sx={{margin: 0, color: 'white'}}>{everyCity.city}</Typography>
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