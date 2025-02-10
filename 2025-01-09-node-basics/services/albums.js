const albums = require('../data/albums')
const { sliceData, sortData } = require('./utils')

const getAlbums = (query) => {
    if (!albums){
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

    let response = sortData(albums, sort, order)
    response = sliceData(albums, {start, end, limit})

    return response
}

const getAlbumById = id => {
    const foundAlbum = albums.find(album => album.id === id)
    
    return foundAlbum ?? {}
}

const embedAlbum = (album, embed) => {
    const embedList = Array.isArray(embed) ? embed : [embed]
    const embedData = embedList.map(item => item.toLowerCase())

    const userId = album.userId
    const updatedAlbum = {...album}
    
    if (embedData.includes('user')){
        updatedAlbum.user = getUserById(userId)
    }
    
    if (embedData.includes('photos')){
        updatedAlbum.photos = getPhotosByAlbumId(album.id)
    }

    
    return updatedAlbum
}

const getAlbumsByUserId = id => {
    const foundAlbums = albums.filter(album => album.userId === id)
    
    return foundAlbums
}

module.exports = { getAlbums, getAlbumById, embedAlbum, getAlbumsByUserId }