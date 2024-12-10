import { firstLetterUpperCase, getUrlParams } from "./functions.ts"
import createHeader from "./header.ts"

type Album = {
    userId: number
    id: number
    title: string
    photos: Photo[]
    user: User
}
type Photo = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

type User = {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

type Company = {
    name: string
    catchPhrase: string
    bs: string
}

async function init(){
    const header = createHeader()
    document.body.prepend(header)

    const contentElement = document.querySelector('#content')!
    const titleElement = document.createElement('h1')

    const albumId = getUrlParams('albumId')

    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_embed=photos&_expand=user`)
    const albumData: Album = await response.json()
    
    if (Object.keys(albumData).length === 0){
        titleElement.textContent = 'Album not found'
        const returnLink = document.createElement('a')
        returnLink.textContent = 'Return to albums page'
        returnLink.href = 'albums.html'
        titleElement.after(returnLink)

        return
    }

    titleElement.textContent = firstLetterUpperCase(albumData.title)

    const authorElement = document.createElement('a')
    authorElement.textContent = `Author: ${albumData.user.name}`
    authorElement.href = `user.html?userId=${albumData.userId}`

    const addPhotosWrapper = document.createElement('div')

    const pElement = document.createElement('p')
    pElement.textContent = 'Add a photo:'

    const formControl1 = document.createElement('div')

    const inputLabel = document.createElement('label')
    inputLabel.htmlFor = 'photo-input'
    inputLabel.textContent = 'Paste photo URL: '

    const URLinput = document.createElement('input')
    URLinput.name = 'photo-input'
    URLinput.id = 'photo-input'

    formControl1.append(inputLabel, URLinput)

    const formControl2 = document.createElement('div')

    const photoInputLabel = document.createElement('label')
    photoInputLabel.htmlFor = 'photo-title'
    photoInputLabel.textContent = 'Photo title: '

    const photoTitleInput = document.createElement('input')
    photoTitleInput.name = 'photo-title'
    photoTitleInput.id = 'photo-title'

    const addPhotoButton = document.createElement('button')
    addPhotoButton.id = 'add-photo-button'
    addPhotoButton.textContent = 'Add photo'

    formControl2.append(photoInputLabel, photoTitleInput, addPhotoButton)

    addPhotosWrapper.append(pElement, formControl1, formControl2)

    const items = albumData.photos.map(photo => ({ src: photo.url, srct: photo.thumbnailUrl, title: firstLetterUpperCase(photo.title) }))

    const galleryElement = document.createElement('div')
    galleryElement.id = 'gallery'

    contentElement.append(titleElement, authorElement, addPhotosWrapper, galleryElement)

    addPhotoButton.addEventListener('click', async event => {
        const newPhoto = {
            albumId: albumData.id,
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
        albumData.photos.push(createdPhoto)

        
        showPhotos(galleryElement, albumData.photos)
        
        URLinput.value = ''
        photoTitleInput.value = ''
    })

    showPhotos(galleryElement, albumData.photos)
}
function showPhotos(wrapper: HTMLDivElement, photosArr: Photo[]){

    const items = photosArr.map(photo => ({ src: photo.url, srct: photo.thumbnailUrl, title: firstLetterUpperCase(photo.title) }))

    // @ts-ignore
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

    return wrapper
}

init()