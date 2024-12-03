import { firstLetterUpperCase } from "./functions.js"

export default async function createSearchResult(searchPhrase, searchPlace){
    const searchResults = document.createElement('div')

    let postsArr = []
    let usersArr = []
    let albumsArr = []
    let commentsArr = []
    let photosArr = []

    switch(searchPlace){
        case 'all':
            postsArr = await getWantedPosts(searchPhrase)
            usersArr = await getWantedUsers(searchPhrase)
            albumsArr = await getWantedAlbums(searchPhrase)

            searchResults.append(createUl(usersArr, 'users', 'user'))
            searchResults.append(createUl(postsArr, 'posts', 'post'))
            searchResults.append(createUl(albumsArr, 'albums', 'album'))

            break
        case 'users':
            usersArr = await getWantedUsers(searchPhrase)

            searchResults.append(createUl(usersArr, 'users', 'user'))

            break
        case 'posts':
            postsArr = await getWantedPosts(searchPhrase)

            searchResults.append(createUl(postsArr, 'posts', 'post'))

            break
        case 'comments':
            commentsArr = await getWantedComments(searchPhrase)

            searchResults.append(createUl(commentsArr, 'comments', 'comment'))

            break
        case 'albums':
            albumsArr = await getWantedAlbums(searchPhrase)

            searchResults.append(createUl(albumsArr, 'albums', 'album'))

            break
        case 'photos':
            photosArr = await getWantedPhotos(searchPhrase)

            searchResults.append(createUl(photosArr, 'photos', 'photo'))

            break
    }

    return searchResults
}

async function getWantedPosts(phrase){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${phrase}`)
    const postsArr = await response.json()
    return postsArr
}

async function getWantedPhotos(phrase){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?q=${phrase}`)
    const photosArr = await response.json()
    return photosArr
}

async function getWantedComments(phrase){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?q=${phrase}`)
    const commentsArr = await response.json()
    return commentsArr
}

async function getWantedUsers(phrase){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${phrase}`)
    const usersArr = await response.json()
    return usersArr
}

async function getWantedAlbums(phrase){
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?q=${phrase}`)
    const albumsArr = await response.json()
    return albumsArr
}

function createUl(arr, name, type){
    const ulWrapper = document.createElement('div')

    const ulName = document.createElement('p')
    ulName.textContent = firstLetterUpperCase(name) + ':'

    if (arr.length == 0){
        ulName.textContent = `No ${name} have this phrase.`
        return ulName
    }

    const customUl = document.createElement('ul')
    arr.forEach(item => {
        const liElement = document.createElement('li')
        const itemElement = document.createElement('a')
        if (type == 'user' || type == 'comment'){
            itemElement.textContent = item.name
        } else {
            itemElement.textContent = firstLetterUpperCase(item.title)
        }
        itemElement.href = `${type}.html?${type}Id=${item.id}`

        liElement.append(itemElement)
        customUl.append(liElement)
    })

    ulWrapper.append(ulName, customUl)

    return ulWrapper
}