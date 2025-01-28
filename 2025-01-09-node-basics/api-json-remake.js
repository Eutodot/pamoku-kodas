const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


const posts = [
    {
        "userId": "1",
        "id": "1",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": "1",
        "id": "2",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": "1",
        "id": "3",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
]

const comments = []

const users = [
    {
        "id": "1",
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    },
    {
    "id": "2",
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": "3",
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
    }
]

const albums = [
    {
        "userId": "1",
        "id": "1",
        "title": "quidem molestiae enim"
    },
    {
        "userId": "1",
        "id": "2",
        "title": "sunt qui excepturi placeat culpa"
    },
    {
        "userId": "1",
        "id": "3",
        "title": "omnis laborum odio"
    }
]

const photos = [
    {
        "albumId": "1",
        "id": "1",
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": "1",
        "id": "2",
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": "1",
        "id": "3",
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": "2",
        "id": "51",
        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
        "url": "https://via.placeholder.com/600/8e973b",
        "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
    },
    {
        "albumId": "2",
        "id": "52",
        "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
        "url": "https://via.placeholder.com/600/121fa4",
        "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
    },
    {
        "albumId": "2",
        "id": "53",
        "title": "soluta et harum aliquid officiis ab omnis consequatur",
        "url": "https://via.placeholder.com/600/6efc5f",
        "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
    }
]


const getUserById = id => {
    const foundUser = users.find(user => user.id === id)
    
    return foundUser
}

const getPhotosByAlbumId = id => {
    const foundPhotos = photos.filter(photo => photo.albumId === id)
    
    return foundPhotos
}

const embedAlbum = (album, embed) => {
    const embedList = Array.isArray(embed) ? embed : [embed]
    const embedData = embedList.map(item => item.toLowerCase())

    const userId = album.userId
    const updatedAlbum = {...album}
    
    if (embedData.includes('user')){
        updatedAlbum.user = getUserById(userId)
    }
    
    if (embedData.includes('photos')){
        updatedAlbum.photos = getPhotosByAlbumId(album.id)
    }

    
    return updatedAlbum
}

app.get('/posts', (req, res, next) => {
    console.log(req.query)
    const { embed } = req.query
    if (Array.isArray(embed)){

    } else {

    }
    res.send(posts)
})

app.get('/posts/:id', (req, res, next) => {
    const { id } = req.params
    const foundPost = posts.find(post => post.id === id)
    res.send(foundPost)
})

app.post('/posts', (req, res, next) => {
    const newPost = req.body
    newPost.id = Math.random().toString().slice(2, 7)
    newPost.creationDate = new Date()
    posts.push(newPost)
    console.log(posts)
    res.send(newPost)
})

app.put('/posts/:id', (req, res, next) => {
    const { id } = req.params
    const newPost = req.body
    const updatedPost = { 
        ...newPost,
        id,
        lastModified: new Date()
        // slug: generatePersonSlug({...newPerson, id})
    }

    const foundIndex = posts.findIndex(post => post.id === id)
    if (foundIndex !== -1){
        posts.splice(foundIndex, 1, updatedPost)
    } 
    
    res.send(updatedPost)
})

app.delete('/posts/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = posts.findIndex(post => post.id === id)
    if (foundIndex !== -1){
        posts.splice(foundIndex, 1)
    } 
    res.send(posts)
})

app.post('/comments', (req, res, next) => {
    const newComment = req.body
    newComment.id = Math.random().toString().slice(2, 7)
    newComment.creationDate = new Date()
    comments.push(newComment)
    
    res.send(newComment)
})

app.delete('/comments/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = comments.findIndex(comment => comment.id === id)
    if (foundIndex !== -1){
        comments.splice(foundIndex, 1)
    } 
    res.send(comments)
})

app.get('/users', (req, res, next) => {
    const { embed } = req.query
    if (Array.isArray(embed)){

    } else {

    }
    res.send(users)
})

app.get('/users/:id', (req, res, next) => {
    const { id } = req.params
    
    res.send(getUserById(id))
})

app.post('/users', (req, res, next) => {
    const newUser = req.body
    newUser.id = Math.random().toString().slice(2, 7)
    newUser.creationDate = new Date()
    users.push(newUser)
    
    res.send(newUser)
})

app.put('/users/:id', (req, res, next) => {
    const { id } = req.params
    const newUser = req.body
    const updatedUser = { 
        ...newUser,
        id,
        lastModified: new Date()
        // slug: generatePersonSlug({...newPerson, id})
    }
    
    const foundIndex = users.findIndex(user => user.id === id)
    if (foundIndex !== -1){
        users.splice(foundIndex, 1, updatedUser)
    } 
    
    res.send(updatedUser)
})

app.delete('/users/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = users.findIndex(user => user.id === id)
    if (foundIndex !== -1){
        users.splice(foundIndex, 1)
    } 
    res.send(users)
})

app.get('/albums', (req, res, next) => {
    const embed = req.query._embed

    const response = albums.map(album => embedAlbum(album, embed))

    res.send(response)
})

app.get('/albums/:id', (req, res, next) => {
    const { id } = req.params
    const embed = req.query._embed

    const foundAlbum = albums.find(album => album.id === id)

    const response = embedAlbum(foundAlbum, embed)

    res.send(response)
})

app.post('/photos', (req, res, next) => {
    const newPhoto = req.body
    newPhoto.id = Math.random().toString().slice(2, 7)
    newPhoto.creationDate = new Date()
    photos.push(newPhoto)
    
    res.send(newPhoto)
})



app.listen(3000, () => console.log("Server is running on 3000"))