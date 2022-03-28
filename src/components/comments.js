//importo de librerias externas
import React, {useEffect, useState} from 'react'
import Badge from '@mui/material/Badge'
import {styled} from '@mui/material/styles'
import {Box, Typography} from '@mui/material'
import {Link as LinkRouter} from "react-router-dom"

//importo los estilos
import '../styles/styles.css'

//importo acciones de redux
import {connect} from 'react-redux'
import tineraryActions from '../redux/actions/tineraryActions'

//se llama en display
//llega como props: tinDat (datos de los itinerarios) y user
function Comments(props) {
    const [comments,setComments] = useState([]) //para guardar los comentarios de la BD
    const [inputText,setInputText] = useState("") //para guardar los comentarios nuevos
    const [modifyCom,setModifyCom] = useState("") //para guardar los comentarios modificados
    const [reload,setReload] = useState(false) //para "recargar" la pagina

    useEffect(() => {
        props.oneTinerary(props.tinDat._id)
            .then(response => setComments(response.comments))
            /* .then(console.log(comments)) */
    }, [reload])

    async function toAdd(event) {
        const commentData = {
            tinId: props.tinDat._id,
            comments: {
                comment: inputText,
                userId: props.user.id
            }
        }
        await props.addComment(commentData)
        setInputText("")
        setReload(!reload)
    }
    
    async function toModify(event) {
        const commentData = {
            commentId: event.target.id,
            comments: {
                comment: modifyCom,
                userId: props.user.id
            }
        }
        await props.modifyComment(commentData)
        setReload(!reload)
    }
    
    async function toDelete(event) {
        await props.deleteComment(event.target.id)
        setReload(!reload)
    }

    return (
        <>
            {comments?.map((comment) =>
                (props.user ?
                    (props.user.id !== comment.userId._id ? 
                        <Box key={comment._id} sx={{margin: '16px', display: 'flex', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>
                            <img className="onlyimgComment" alt={comment.userId.name} src={comment.userId.userPhoto} />
                            <Box sx={{padding: '8px', flexGrow: '1'}}>
                                <Typography sx={{width: '100%',padding: '8px', paddingTop: '0'}}>{comment.userId.email}</Typography>
                                <Typography sx={{width: '100%', display: 'flex', padding: '8px', color: 'black', backgroundColor: 'rgb(126, 196, 165)'}}>{comment.comment}</Typography>
                            </Box>
                        </Box> :
                        <Box key={comment._id} sx={{margin: '16px', display: 'flex', backgroundColor: 'rgb(74, 140, 111)'}}>
                            <img className="onlyimgComment" alt={comment.userId.name} src={comment.userId.userPhoto} />
                            <Box sx={{padding: '8px', flexGrow: '1'}}>
                                <Typography sx={{width: '100%'}}>{comment.userId.email}</Typography>
                                <Box sx={{width: '100%', display: 'flex', padding: '8px', paddingBottom: '0'}}>
                                    <button id={comment._id} onClick={toModify} className='myButtons'>modify</button>
                                    <textarea rows='2' onChange={(event) => setModifyCom(event.target.value)} defaultValue={comment.comment} className='myInputforComment' />
                                    <button id={comment._id} onClick={toDelete} className='myButtons'>delete</button>
                                </Box>
                            </Box>
                        </Box>
                    ) : 
                    (
                        <Box key={comment._id} sx={{margin: '16px', display: 'flex', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>
                            <img className="onlyimgComment" alt={comment.userId.name} src={comment.userId.userPhoto} />
                            <Box sx={{padding: '8px', flexGrow: '1'}}>
                                <Typography sx={{width: '100%',padding: '8px', paddingTop: '0'}}>{comment.userId.email}</Typography>
                                <Typography sx={{width: '100%', display: 'flex', padding: '8px',  color: 'black', backgroundColor: 'rgb(126, 196, 165)'}}>{comment.comment}</Typography>
                            </Box>
                        </Box> 
                    )
                )
            )}
            {props.user ?
                (<Box sx={{margin: '16px', display: 'flex', color: 'white', backgroundColor: 'rgb(74, 140, 111)'}}>
                    <img className="onlyimgComment" alt={props.user.name} src={props.user.userPhoto} />
                    <Box sx={{padding: '8px', flexGrow: '1'}}>
                        <Typography sx={{width: '100%'}}>{props.user.email}</Typography>
                        <Box sx={{width: '100%', display: 'flex', padding: '8px', paddingBottom: '0'}}>
                            <textarea rows='2' onChange={(event) => setInputText(event.target.value)} value={inputText} className='myInputforComment' />
                            <button onClick={toAdd} className='myButtons'>add comment</button>
                        </Box>
                    </Box>
                </Box>
                ) : (
                    <LinkRouter to={'/login'} className='anchor festiveFont violetShadows'>log in to add a comment!</LinkRouter>
                )
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
    addComment: tineraryActions.addComment,
    modifyComment: tineraryActions.modifyComment,
    deleteComment: tineraryActions.deleteComment,
    oneTinerary: tineraryActions.oneTinerary
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)