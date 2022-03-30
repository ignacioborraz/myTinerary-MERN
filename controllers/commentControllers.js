const Tineraries = require('../models/tinerary')

const commentControllers = { //defino los metodos que necesita el controlador (utiliza una funcion asincrona (async/await))

    addComment: async (req, res) => {
        //console.log('REQ.PARAMS')
        //console.log(req.params)
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)
        const {tinId,comments} = req.body
        const user = req.user._id
        try {
            const newComment = await Tineraries
                .findOneAndUpdate({_id: tinId}, {$push: {comments: {comment: comments.comment, userId: user}}}, {new: true})
                .populate("comments.userId", {name:1,email:1,userPhoto:1})
            res.json({success: true,
                response: {newComment},
                message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }
    },

    modifyComment: async (req, res) => {
        //console.log('REQ.PARAMS')
        //console.log(req.params)
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)s
        const {commentId,comments} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Tineraries
            .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            res.json({success: true,
                response: {modifyComment},
                message: "the comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!" })
        }
    },

    deleteComment: async (req, res) => {
        //console.log('REQ.PARAMS')
        //console.log(req.params)
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)
        const commentId = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Tineraries
            .findOneAndUpdate({"comments._id": commentId}, {$pull: {comments: {_id: commentId}}}, {new: true})
            res.json({success: true,
                response: {deleteComment},
                message: "the comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again!"})
        }
    }
}

module.exports = commentControllers //exporto los controladores

//luego configuro el enrrutador de endpoints