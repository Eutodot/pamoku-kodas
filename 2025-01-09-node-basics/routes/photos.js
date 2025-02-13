const express = require('express')

const { getPhotos, getPhotoById, editPhoto, deletePhoto, postNewPhoto } = require('../services/photos')
const photos = require('../data/photos')

const router = express.Router()

router.get('/', (req, res, next) => {
    const response = getPhotos(req.query)

    res.send(response)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const embed = req.query._embed
    
    const response = embedUser(getPhotoById(id), embed)

    res.send(response)
})

router.post('/photos', (req, res, next) => {
    const newPhoto = req.body
    
    res.send(postNewPhoto(newPhoto))
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const newPhoto = req.body
    
    
    res.send(editPhoto(id, newPhoto))
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    
    res.send(deletePhoto(id))
})

module.exports = router