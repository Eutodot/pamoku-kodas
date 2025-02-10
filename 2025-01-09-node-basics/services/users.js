const users = require('../data/users')
const { sliceData, sortData } = require('./utils')

const getUsers = (query) => {
    if (!users){
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

    let response = sortData(users, sort, order)
    response = sliceData(users, {start, end, limit})

    return response
}

const getUserById = id => {
    const foundUser = users.find(user => user.id === id)
    
    return foundUser ?? {}
}

const embedUser = (user, embed) => {
    if (!embed){
        return user
    }

    const embedList = Array.isArray(embed) ? embed : [embed]
    const embedData = embedList.map(item => item.toLowerCase())

    const userId = user.id
    const updatedUser = {...user}
    
    if (embedData.includes('posts')){
        updatedUser.posts = getPostsByUserId(id)
    }
    
    if (embedData.includes('albums')){
        updatedUser.comments = getAlbumsByUserId(id)
    }

    
    return updatedUser
}

module.exports = { getUsers, getUserById, embedUser }