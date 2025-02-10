const posts = require('../data/posts')
const { sliceData, sortData } = require('./utils')

const getPosts = (query) => {
    if (!posts){
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

    let response = sortData(posts, sort, order)
    response = sliceData(posts, {start, end, limit})

    return response
}

const getPostById = id => {
    const foundPost = posts.find(post => post.id === id)
    
    return foundPost ?? {}
}

const embedPost = (post, embed) => {
    if (!embed){
        return post
    }

    const embedList = Array.isArray(embed) ? embed : [embed]
    const embedData = embedList.map(item => item.toLowerCase())

    const userId = post.userId
    const updatedPost = {...post}
    
    if (embedData.includes('user')){
        updatedPost.user = getUserById(userId)
    }
    
    if (embedData.includes('comments')){
        updatedPost.comments = getCommentsByPostId(post.id)
    }

    
    return updatedPost
}

const getPostsByUserId = id => {
    const foundPosts = posts.filter(post => post.userId === id)
    
    return foundPosts
}

module.exports = { getPosts, getPostById, embedPost, getPostsByUserId }