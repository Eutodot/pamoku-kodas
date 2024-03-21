const postsWrapper = document.querySelector('#posts-wrapper')
async function init(){
    const postsArr = await getPosts()
    postsArr.forEach(async post => {
        const singlePostWrapper = document.createElement('div')
        const postNameElement = document.createElement('a')
        const postAuthorElement = document.createElement('a')
        postNameElement.textContent = `${post.title} `
        postNameElement.href = `post.html?postId=${post.id}`
        postAuthorElement.textContent = `Author: ${post.user.name}`
        postAuthorElement.href = 'user.html'
        singlePostWrapper.append(postNameElement, postAuthorElement)
        postsWrapper.append(singlePostWrapper)
    });
}

async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_expand=user')
    const postsArr = await response.json()
    return postsArr
}

// async function getAuthorsName(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     const postAuthor = await response.json()
//     const postAuthorName = postAuthor.name
//     return postAuthorName
// }

init()