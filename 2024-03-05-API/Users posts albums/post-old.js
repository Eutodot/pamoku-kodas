import { firstLetterUpperCase, getUrlParams } from "./src/functions.js"
import createHeader from "./header.js"


async function init(){
    const header = createHeader()
    document.body.prepend(header)
    
    const contentElement = document.querySelector('#content')
    const titleElement = document.createElement('h1')
    contentElement.append(titleElement)

    const postId = getUrlParams('postId')

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
    const postData = await response.json()

    if (Object.keys(postData).length === 0){
        titleElement.textContent = 'Post not found'
        const returnLink = document.createElement('a')
        returnLink.textContent = 'Return to posts page'
        returnLink.href = 'posts.html'
        titleElement.after(returnLink)

        return
    }

    titleElement.textContent = firstLetterUpperCase(postData.title)

    const authorElement = document.createElement('a')
    authorElement.textContent = `Author: ${postData.user.name}`
    authorElement.href = `user.html?userId=${postData.userId}`

    const textElement = document.createElement('p')
    textElement.textContent = firstLetterUpperCase(postData.body)

    const editLink = document.createElement('a')
    editLink.href = `edit-post.html?postId=${postData.id}`
    editLink.textContent = 'Edit'

    ///////////////////////////////////////////////

    const createCommentWrapper = document.createElement('div')
    createCommentWrapper.textContent = `Add a comment:`
    const createCommentForm = document.createElement('form')
    
    const formControl1 = document.createElement('div')
    formControl1.classList.add('form-control')
    const commentNameInputLabel = document.createElement('label')
    commentNameInputLabel.for = 'comment-name-input'
    commentNameInputLabel.textContent = 'Title: '
    const commentNameInput = document.createElement('input')
    commentNameInput.name = 'comment-name-input'
    commentNameInput.id = 'comment-name-input'

    formControl1.append(commentNameInputLabel, commentNameInput)

    const formControl2 = document.createElement('div')
    formControl2.classList.add('form-control')
    const commentTextInputLabel = document.createElement('label')
    commentTextInputLabel.for = 'comment-text-input'
    commentTextInputLabel.textContent = 'Text: '
    const commentTextInput = document.createElement('textarea')
    commentTextInput.name = 'comment-text-input'
    commentTextInput.id = 'comment-text-input'
    
    formControl2.append(commentTextInputLabel, commentTextInput)

    const formControl3 = document.createElement('div')
    formControl3.classList.add('form-control')
    const commentAuthorInputLabel = document.createElement('label')
    commentAuthorInputLabel.for = 'comment-author-input'
    commentAuthorInputLabel.textContent = 'Email: '
    const commentAuthorInput = document.createElement('input')
    commentAuthorInput.type = 'email'
    commentAuthorInput.name = 'comment-author-input'
    commentAuthorInput.id = 'comment-author-input'

    formControl3.append(commentAuthorInputLabel, commentAuthorInput)

    const addCommentButton = document.createElement('button')
    addCommentButton.type = 'submit'
    addCommentButton.textContent = 'Comment'

    createCommentForm.append(formControl1, formControl2, formControl3, addCommentButton)
    createCommentWrapper.append(createCommentForm)



    const postCommentsWrapper = document.createElement('div')
    postCommentsWrapper.textContent = `Comments:`
    const postCommentsList = document.createElement('ul')

    postData.comments.forEach(comment => {

        postCommentsList.append(createCommentElement(comment.id, comment.name, comment.body, comment.email, createCommentForm))
    })

    postCommentsWrapper.append(postCommentsList)


    const returnToPostsElement = document.createElement('a')
    returnToPostsElement.textContent = `More ${postData.user.name} posts`
    returnToPostsElement.href = 'posts.html'

    titleElement.after(authorElement, textElement, editLink, createCommentWrapper, postCommentsWrapper)

    //////////////////////////////////////////////
    // console.log(postData.comments)
    createCommentForm.addEventListener('submit', async event => {
        event.preventDefault()

        const newComment = {
            postId: postData.id,
            name: commentNameInput.value,
            body: commentTextInput.value,
            email: commentAuthorInput.value,
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const createdComment = await response.json()

        postCommentsList.prepend(createCommentElement(createdComment.id, createdComment.name, createdComment.body, createdComment.email, createCommentForm)
    )
    })

}

function createCommentElement(id, name, body, email, form){
    
    const liElement = document.createElement('li')

    const commentNameElement = document.createElement('h3')
    commentNameElement.textContent = firstLetterUpperCase(name)

    const commentTextElement = document.createElement('p')
    commentTextElement.textContent = firstLetterUpperCase(body)
    
    const commentAuthorElement = document.createElement('p')
    commentAuthorElement.textContent = `Authors email: ${email}`

    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'

    liElement.append(commentNameElement, commentTextElement, commentAuthorElement, editButton)        
        

    editButton.addEventListener('click', async event => {
        form['comment-name-input'].value = name
        form['comment-text-input'].value = body
        form['comment-author-input'].value = email

        const newComment = {
            postId: postData.id,
            name: commentNameInput.value,
            body: commentTextInput.value,
            email: commentAuthorInput.value,
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const editedComment = await response.json()
        console.log(editedComment)
        commentNameElement.textContent = firstLetterUpperCase(editedComment.name)

        commentTextElement.textContent = firstLetterUpperCase(editedComment.body)
        
        commentAuthorElement.textContent = `Authors email: ${editedComment.email}`
    })

    return liElement
}



init()