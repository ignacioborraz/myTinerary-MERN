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
            justifyContent: 'space-between'}}>
            {props.activities?.map( everyAct =>
                <div key={everyAct._id}>
                    <Box className='absolute activities' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(126, 196, 165, 0.4)',
                        marginLeft: '16px',
                        marginRight: '16px'}}>
                        <Typography variant="h4" className='fredokaFont shadows' sx={{color: 'black'}}>{everyAct.activity}</Typography>
                    </Box>
                    <Box className='relative activities' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '16px',
                        marginRight: '16px'}}>
                        <img src={process.env.PUBLIC_URL+`${everyAct.actPhoto}`} alt={everyAct.activity} className='fitImg' />
                    </Box>
                </div>
            )}
        </Box>
    )
}