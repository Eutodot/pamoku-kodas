import { firstLetterUpperCase, getUrlParams, getUsers } from "./src/functions.js"
import createHeader from "./header.js"


async function init(){
    const header = createHeader()
    document.body.prepend(header)

    const postId = getUrlParams('postId')
    const users = await getUsers()

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user`)
    const postData = await response.json()

    const userSelect = document.querySelector('#user')
    users.forEach(user => {
        const optionElement = document.createElement('option')
        // optionElement.value = `${user.id}_${user.name}`
        optionElement.value = `${user.id}_${user.name}`
        optionElement.textContent = user.name
        userSelect.append(optionElement)
    })

    const postForm = document.querySelector('#post-form')

    const titleInput = postForm.querySelector('#title')
    titleInput.value = firstLetterUpperCase(postData.title)
    
    const bodyInput = postForm.querySelector('#body')
    bodyInput.value = firstLetterUpperCase(postData.body)
    
    userSelect.value = `${postData.user.id}_${postData.user.name}`

    const submitButton = document.querySelector('#submit-button')
    submitButton.removeAttribute('disabled')


    postForm.addEventListener('submit', async event => {
        event.preventDefault()
        const title = event.target.title.value
        const body = event.target.body.value
        const userValue = event.target.user.value
        const userId = userValue.split('_')[0]
        const username = userValue.split('_')[1]


        const newPost = {
            title,
            body,
            userId: Number(userId),
            id: postData.id,
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`, {
            method: 'PUT',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const editedPost = await response.json()
        console.log(editedPost)
        editedPost.username = username
        postForm.after(editPost(editedPost))
    })
}

function editPost(info){
    const previousPostWrapper = document.getElementById('post-wrapper')
    if (previousPostWrapper){
        previousPostWrapper.remove()
    }
    const postWrapper = document.createElement('div')
    postWrapper.id = 'post-wrapper'
    const postTitle = document.createElement('h3')
    const postAuthor = document.createElement('a')
    const postBody = document.createElement('p')

    postTitle.textContent = `${firstLetterUpperCase(info.title)} (${info.id})`
    postAuthor.textContent = `Author: ${info.username}`
    postAuthor.href = `user.html?userId=${info.userId}`
    postBody.textContent = firstLetterUpperCase(info.body)
    postWrapper.append(postTitle, postAuthor, postBody)
    
    return postWrapper
}

init()