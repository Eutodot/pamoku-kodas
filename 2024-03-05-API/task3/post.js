async function init(){
    const contentElement = document.querySelector('#content')
    const titleElement = document.createElement('h1')
    contentElement.append(titleElement)

    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const postId = urlParams.get('postId')

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const postData = await response.json()

    if (Object.keys(postData).length === 0){
        titleElement.textContent = 'Post not found'
        const returnLink = document.createElement('a')
        returnLink.textContent = 'Return to posts page'
        returnLink.href = 'posts.html'
        titleElement.after(returnLink)

        return
    }

    titleElement.textContent = postData.title
}

init()