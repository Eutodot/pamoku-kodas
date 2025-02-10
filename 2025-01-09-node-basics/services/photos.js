const photos = require('../data/photos')
const { sliceData, sortData } = require('./utils')

const getPhotos = (query) => {
    if (!photos){
        return []
    }
    console.log(query)
    console.log(Object.entries(query))
    const embed = query._embed
    const start = query._start
    const end = query._end
    const limit = query._limit
    // const filterKey = query.
    const sort = query._sort
    const order = query._order

    let response = sortData(photos, sort, order)
    response = sliceData(photos, {start, end, limit})

    return response
}

const getPhotoById = id => {
    const foundPhoto = photos.find(photo => photo.id === id)
    
    return foundPhoto ?? {}
}

const getPhotosByAlbumId = id => {
    const foundPhotos = photos.filter(photo => photo.albumId === id)
    
    return foundPhotos
}

module.exports = { getPhotos, getPhotoById, getPhotosByAlbumId }