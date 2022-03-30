//importo de librerias externas
import React, {useEffect} from 'react'
import {Link as LinkRouter} from "react-router-dom"
import Typography from '@mui/material/Typography';
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
                    <LinkRouter to={`/cities/${everyCity._id}`} key={everyCity._id}>
                        <Box className='fitImg absolute boxSize' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(126, 196, 165, 0.4)',
                            margin: '5px',
                            marginTop: '10px'}}>
                            <Typography variant="h2" className='festiveFont shadows' sx={{color: 'black'}}>{everyCity.city}</Typography>
                        </Box>
                        <Box className='relative boxSize' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '5px',
                            marginTop: '10px'}}>
                            <img src={process.env.PUBLIC_URL+`${everyCity.photo}`} alt={everyCity.city} className='fitImg' />
                        </Box>
                    </LinkRouter>
                    )}
                </Box> : 
                <>
                    <h3>TYPE ANOTHER CITY PLEASE</h3>
                    <h5>we didn't find that!</h5>
                </>     
            }
        </>
    )
}