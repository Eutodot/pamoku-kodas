import { firstLetterUpperCase, getUsers } from "./functions.ts"
import createHeader from "./header.ts"

let photosArr: object = []

async function init(){
    const header = createHeader()
    document.body.prepend(header)

    const users = await getUsers()

    const userSelect = document.querySelector('#user')!
    users.forEach(user => {
        const optionElement = document.createElement('option')
        optionElement.value = `${user.id}_${user.name}`
        optionElement.textContent = user.name
        userSelect.append(optionElement)
    })

    const submitButton = document.querySelector('#submit-button')!
    submitButton.removeAttribute('disabled')

    
    const createAlbumForm = document.querySelector('#album-form')!
    createAlbumForm.addEventListener('submit', async event => {
        event.preventDefault()
        const title = event.target.title.value
        const userValue = event.target.user.value
        const userId = userValue.split('_')[0]
        const username = userValue.split('_')[1]


        const newAlbum = {
            title,
            userId: Number(userId),
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const createdAlbum = await response.json()
        createdAlbum.username = username
        createAlbumForm.after(createAlbum(createdAlbum))
    })
}

function createAlbum(info){
    console.log(info)
    const albumWrapper = document.createElement('div')
    const albumTitle = document.createElement('h3')
    const albumAuthor = document.createElement('a')
    const addPhotosWrapper = document.createElement('div')
    const albumPhotosWrapper = document.createElement('div')

    const pElement = document.createElement('p')
    pElement.textContent = 'Add a photo:'

    const formControl1 = document.createElement('div')

    const inputLabel = document.createElement('label')
    inputLabel.for = 'photo-input'
    inputLabel.textContent = 'Paste photo URL: '

    const URLinput = document.createElement('input')
    inputLabel.name = 'photo-input'
    inputLabel.id = 'photo-input'

    formControl1.append(inputLabel, URLinput)

    const formControl2 = document.createElement('div')

    const photoInputLabel = document.createElement('label')
    photoInputLabel.for = 'photo-title'
    photoInputLabel.textContent = 'Photo title: '

    const photoTitleInput = document.createElement('input')
    inputLabel.name = 'photo-title'
    inputLabel.id = 'photo-title'

    const addPhotoButton = document.createElement('button')
    addPhotoButton.id = 'add-photo-button'
    addPhotoButton.textContent = 'Add photo'

    formControl2.append(photoInputLabel, photoTitleInput, addPhotoButton)

    addPhotosWrapper.append(pElement, formControl1, formControl2)

    albumTitle.textContent = `${firstLetterUpperCase(info.title)} (${info.id})`
    albumAuthor.textContent = `Author: ${info.username}`
    albumAuthor.href = `user.html?userId=${info.userId}`
    albumWrapper.append(albumTitle, albumAuthor, addPhotosWrapper, albumPhotosWrapper)
    

    addPhotoButton.addEventListener('click', async event => {
        const newPhoto = {
            albumId: info.id,
            url: URLinput.value,
            thumbnailUrl: URLinput.value,
            title: photoTitleInput.value,
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify(newPhoto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const createdPhoto = await response.json()
        photosArr.push(createdPhoto)

        const items = photosArr.map(photo => ({ src: photo.url, srct: photo.thumbnailUrl, title: firstLetterUpperCase(photo.title) }))
        
        showPhotos(albumPhotosWrapper, items)
        
        URLinput.value = ''
        photoTitleInput.value = ''
    })

    return albumWrapper
}

function showPhotos(wrapper, items){
    wrapper.textContent = ''

    jQuery(wrapper).nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  150,
        thumbnailWidth:   150,
        thumbnailDisplayTransition: 'scaleDown',
        thumbnailHoverEffect2:      'scale120',
        itemsBaseURL:     'https://via.placeholder.com/',
        
        // ### gallery content ### 
        items
    })
}

init()