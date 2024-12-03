import { firstLetterUpperCase } from "./functions.js"
import createHeader from "./header.js"

const albumsWrapper = document.querySelector('#albums-wrapper')
async function init(){
    const header = createHeader()
    document.body.prepend(header)

    // changeNavigationStyle()

    const albumsArr = await getAlbums()
    albumsArr.forEach(async album => {
        const singleAlbumWrapper = document.createElement('a')
        const albumNameElement = document.createElement('p')
        const albumAuthorElement = document.createElement('p')
        const albumInsidesElement = document.createElement('p')
        const albumPhotoElement = document.createElement('img')
        albumNameElement.textContent = firstLetterUpperCase(album.title)
        albumAuthorElement.textContent = `Author: ${album.user.name}`
        albumInsidesElement.textContent = `Photos in album: ${album.photos.length}`
        albumPhotoElement.src = getOnePhoto(album.photos)
        singleAlbumWrapper.href = `album.html?albumId=${album.id}`
        singleAlbumWrapper.append(albumNameElement, albumAuthorElement, albumInsidesElement, albumPhotoElement)
        albumsWrapper.append(singleAlbumWrapper)
    });
}

async function getAlbums(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
    const albumsArr = await response.json()
    return albumsArr
}

// async function getAuthorsName(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     const albumAuthor = await response.json()
//     const albumAuthorName = albumAuthor.name
//     return albumAuthorName
// }

// async function getPhotosAmount(albumId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
//     const photosArr = await response.json()
//     const photosAmount = photosArr.length
//     return photosAmount
// }

function getOnePhoto(photosArr){
    let randomNumInArr = Math.floor(Math.random() * photosArr.length)
    const photoUrl = photosArr[randomNumInArr].thumbnailUrl
    return photoUrl
}

// function changeNavigationStyle(){
//     const navigationElement = document.querySelector('#navigation')
//     const sendToAlbums = navigationElement.querySelector('#send-to-albums')
//     sendToAlbums.style.fontWeight = "900"

// }

init()