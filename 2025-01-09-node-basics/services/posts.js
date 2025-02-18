const posts = require('../data/posts')
const { sliceData, sortData, embedData, formatData } = require('./utils')

const getPosts = (query) => {
    if (!posts){
        return []
    }
    
    // const queryEntries = Object.entries(query)
    // queryEntries.forEach(entry => {
    //     if (Array.from(entry[0])[0] !== '_'){
    //         const filterKey = entry[0]
    //         const filterValue = entry[1]

    //     }
    // })
    // const embed = query._embed
    // const start = query._start
    // const end = query._end
    // const limit = query._limit
    // const sort = query._sort
    // const order = query._order

    // let response = sortData(posts, sort, order)
    // response = sliceData(posts, {start, end, limit})
    // response = response.map(post => embedData(post, embed, 'post'))

    const response = formatData(posts, query, 'post')

    return response
}

const getPostById = (id, query) => {
    const embed = query._embed
    
    let foundPost = posts.find(post => post.id === id)
    foundPost = embedData(foundPost, embed, 'post')

    return foundPost ?? {}
}

const getPostsByUserId = id => {
    const foundPosts = posts.filter(post => post.userId === id)
    
    return foundPosts
}

const postNewPost = newPost => {
    newPost.id = Math.random().toString().slice(2, 7)
    newPost.creationDate = new Date()
    posts.push(newPost)
    
    return newPost
}

const editPost = (id, newPost) => {
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

    return updatedPost
}

const deletePost = id => {
    const foundIndex = posts.findIndex(post => post.id === id)
    if (foundIndex !== -1){
        posts.splice(foundIndex, 1)
    } 

    return posts
}

module.exports = { getPosts, getPostById, getPostsByUserId, postNewPost, editPost, deletePost }