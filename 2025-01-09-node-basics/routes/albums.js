const express = require('express')

const { getAlbums, getAlbumById } = require('../services/albums')

const router = express.Router()

router.get('/', (req, res, next) => {
    const response = getAlbums(req.query)
    
    res.send(response)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const embed = req.query._embed

    const response = getAlbumById(id)

    //const response = embedAlbum(foundAlbum, embed)

    res.send(response)
})

module.exports = router