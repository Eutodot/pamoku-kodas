const posts = require('../data/posts')

const getPosts = () => {
    console.log(posts)
    if (!posts){
        return []
    }

    return posts
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

module.exports = {getPosts, getPostById, embedPost, getPostsByUserId}