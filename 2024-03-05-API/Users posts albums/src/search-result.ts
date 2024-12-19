import { firstLetterUpperCase } from "./functions.ts"
import { Album, Photo, Post, User } from "./types.ts"

type PostsData = {
    data: Post[]
    type: 'post'
}
type UsersData = {
    data: User[]
    type: 'user'
}
type AlbumsData = {
    data: Album[]
    type: 'album'
}
type CommentsData = {
    data: Comment[]
    type: 'comment'
}
type PhotosData = {
    data: Photo[]
    type: 'photo'
}

type DataList = UsersData | PostsData | AlbumsData | CommentsData | PhotosData

export default async function createSearchResult(searchPhrase: string, searchPlace: string){
    const searchResults = document.createElement('div')

    switch(searchPlace){
        case 'all': {
            const postsArr = await getWantedPosts(searchPhrase)
            const usersArr = await getWantedUsers(searchPhrase)
            const albumsArr = await getWantedAlbums(searchPhrase)

            searchResults.append(createUl({data: usersArr, type: 'user'}, 'users'))
            searchResults.append(createUl({data: postsArr, type: 'post'}, 'posts'))
            searchResults.append(createUl({data: albumsArr, type: 'album'}, 'albums'))

            break
        }
        case 'users':
            const usersArr: User[] = await getWantedUsers(searchPhrase)

            searchResults.append(createUl({data: usersArr, type: 'user'}, 'users'))

            break
        case 'posts':
            const postsArr: Post[] = await getWantedPosts(searchPhrase)

            searchResults.append(createUl({data: postsArr, type: 'post'}, 'posts'))

            break
        case 'comments':
            const commentsArr: Comment[] = await getWantedComments(searchPhrase)

            searchResults.append(createUl({data: commentsArr, type: 'comment'}, 'comments'))

            break
        case 'albums':
            const albumsArr: Album[] = await getWantedAlbums(searchPhrase)

            searchResults.append(createUl({data: albumsArr, type: 'album'}, 'albums'))

            break
        case 'photos':
            const photosArr: Photo[] = await getWantedPhotos(searchPhrase)

            searchResults.append(createUl({data: photosArr, type: 'photo'}, 'photos'))

            break
    }

    return searchResults
}

async function getWantedPosts(phrase: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${phrase}`)
    const postsArr: Post[] = await response.json()
    return postsArr
}

async function getWantedPhotos(phrase: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?q=${phrase}`)
    const photosArr: Photo[] = await response.json()
    return photosArr
}

async function getWantedComments(phrase: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?q=${phrase}`)
    const commentsArr: Comment[] = await response.json()
    return commentsArr
}

async function getWantedUsers(phrase: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${phrase}`)
    const usersArr: User[] = await response.json()
    return usersArr
}

async function getWantedAlbums(phrase: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?q=${phrase}`)
    const albumsArr: Album[] = await response.json()
    return albumsArr
}

function createUl(dataList: DataList, name: string){
    const { data, type } = dataList
    const ulWrapper = document.createElement('div')

    const ulName = document.createElement('p')
    ulName.textContent = firstLetterUpperCase(name) + ':'

    if (data.length == 0){
        ulName.textContent = `No ${name} have this phrase.`
        return ulName
    }

    const customUl = document.createElement('ul')
    data.forEach(item => {
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