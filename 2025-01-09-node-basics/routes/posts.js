const express = require('express')

const { getPosts, getPostById } = require('../services/posts')

const router = express.Router()

router.get('/', (req, res, next) => {

    // const postData = [...posts]
    
    const response = getPosts(req.query)
    // const response = sliceData(postData, {start, end, limit}).map(post => embedPost(post, embed))

    res.send(response)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const embed = req.query._embed

    const response = getPostById(id)
    // const response = embedPost(foundPost, embed)

    res.send(response)
})

router.post('/', (req, res, next) => {
    const newPost = req.body
    newPost.id = Math.random().toString().slice(2, 7)
    newPost.creationDate = new Date()
    posts.push(newPost)
    console.log(posts)
    res.send(newPost)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const newPost = req.body
    const updatedPost = { 
        ...newPost,
        id,
        lastModified: new Date()
        // slug: generatePersonSlug({...newPerson, id})
    }

    const foundIndex = posts.findIndex(post => post.id === id)
    if (foundIndex !== -1){
        posts.splice(foundIndex, 1, updatedPost)
    } 
    
    res.send(updatedPost)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = posts.findIndex(post => post.id === id)
    if (foundIndex !== -1){
        posts.splice(foundIndex, 1)
    } 
    res.send(posts)
})

module.exports = router