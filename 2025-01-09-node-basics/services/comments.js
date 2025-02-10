const comments = require('../data/comments')
const { sliceData, sortData } = require('./utils')

const getComments = (query) => {
    if (!comments){
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

    let response = sortData(comments, sort, order)
    response = sliceData(comments, {start, end, limit})

    return response
}

const getCommentById = id => {
    const foundComment = comments.find(comment => comment.id === id)
    
    return foundComment ?? {}
}

const getCommentsByPostId = id => {
    const foundComments = comments.filter(comment => comment.postId === id)
    
    return foundComments ?? {}
}

module.exports = { getComments, getCommentById, getCommentsByPostId }