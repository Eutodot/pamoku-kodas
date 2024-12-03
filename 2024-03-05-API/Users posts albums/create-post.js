import { firstLetterUpperCase, getUsers } from "./functions.js"
import createHeader from "./header.js"

async function init(){
    const header = createHeader()
    document.body.prepend(header)

    const users = await getUsers()

    const userSelect = document.querySelector('#user')
    users.forEach(user => {
        const optionElement = document.createElement('option')
        optionElement.value = `${user.id}_${user.name}`
        optionElement.textContent = user.name
        userSelect.append(optionElement)
    })

    const submitButton = document.querySelector('#submit-button')
    submitButton.removeAttribute('disabled')

    const createPostForm = document.querySelector('#post-form')
    createPostForm.addEventListener('submit', async event => {
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
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const createdPost = await response.json()
        createdPost.username = username
        createPostForm.after(createPost(createdPost))
    })
}

function createPost(info){
    console.log(info)
    const postWrapper = document.createElement('div')
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