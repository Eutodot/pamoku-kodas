const express = require('express')

const {  } = require('../services/comments')

const router = express.Router()

router.post('/', (req, res, next) => {
    const newComment = req.body
    newComment.id = Math.random().toString().slice(2, 7)
    newComment.creationDate = new Date()
    comments.unshift(newComment)
    
    res.send(newComment)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = comments.findIndex(comment => comment.id === id)
    if (foundIndex !== -1){
        comments.splice(foundIndex, 1)
    } 
    res.send(comments)
})

module.exports = router