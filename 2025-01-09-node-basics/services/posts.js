const posts = require('../data/posts')
const pluralize = require('pluralize')
const { getCommentsByPostId } = require('./comments')
const { getUserById } = require('./users')
const { sliceData, sortData, getSingleDataById } = require('./utils')

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
    response = response.map(post => embedPost(post, embed))

    return response
}

const getPostById = (id, query) => {
    const embed = query._embed
    
    let foundPost = posts.find(post => post.id === id)
    foundPost = embedPost(foundPost, embed)

    return foundPost ?? {}
}

const embedPost = (data, embed) => {
    if (!embed){
        return data
    }

    const embedList = Array.isArray(embed) ? embed : [embed]
    const embedData = embedList.map(item => item.toLowerCase())

    
    const updatedData = {...data}
    
    embedData.map((item) => {
        if (pluralize.isSingular(item)){
            if (embedData.includes(item)){
                // updatedData[item] = getUserById(userId)
                const id = data[item + 'Id']
                updatedData[item] = getSingleDataById(pluralize.plural(item), id)
            }
        } else {
            // TODO: Padaryti sito daikto daugiskaitos priemima
        }

        
    })

    // if (embedData.includes('user')){
    //     updatedPost.user = getUserById(userId)
    // }
    
    // if (embedData.includes('comments')){
    //     updatedPost.comments = getCommentsByPostId(post.id)
    // }

    
    return updatedData
}

const getPostsByUserId = id => {
    const foundPosts = posts.filter(post => post.userId === id)
    
    return foundPosts
}

module.exports = { getPosts, getPostById, embedPost, getPostsByUserId }