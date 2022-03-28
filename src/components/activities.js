//importo de librerias externas
import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

//importo los estilos
import '../styles/styles.css'

//se llama en display
//llega como props: tinId (id del itinerario)
export default function Activities (props) {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly'}}>
            {props.activities?.map( everyAct =>
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
    )
}