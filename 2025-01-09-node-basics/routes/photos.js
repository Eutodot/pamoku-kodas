const express = require('express')

const {  } = require('../services/photos')

const router = express.Router()

router.post('/photos', (req, res, next) => {
    const newPhoto = req.body
    newPhoto.id = Math.random().toString().slice(2, 7)
    newPhoto.creationDate = new Date()
    photos.push(newPhoto)
    
    res.send(newPhoto)
})