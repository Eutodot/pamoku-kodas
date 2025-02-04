const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const postsRoutes = require('./routes/posts')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/posts', postsRoutes)



const comments = [
    {
        "postId": "1",
        "id": "3",
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        "postId": "1",
        "id": "4",
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        "postId": "1",
        "id": "5",
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      },
      {
        "postId": "2",
        "id": "6",
        "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      },
      {
        "postId": "2",
        "id": "7",
        "name": "repellat consequatur praesentium vel minus molestias voluptatum",
        "email": "Dallas@ole.me",
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      },
      {
        "postId": "2",
        "id": "8",
        "name": "et omnis dolorem",
        "email": "Mallory_Kunze@marie.org",
        "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
      }
]

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

const getPostById = id => {
    const foundUser = users.find(user => user.id === id)
    
    return foundUser
}

const getPostsByUserId = id => {
    const foundPosts = posts.filter(post => post.userId === id)
    
    return foundPosts
}

const getCommentsByPostId = id => {
    const foundComments = comments.filter(comment => comment.postId === id)
    
    return foundComments
}

const getAlbumsByUserId = id => {
    const foundAlbums = albums.filter(album => album.userId === id)
    
    return foundAlbums
}

const getPhotosByAlbumId = id => {
    const foundPhotos = photos.filter(photo => photo.albumId === id)
    
    return foundPhotos
}



const embedUser = (user, embed) => {
    const embedList = Array.isArray(embed) ? embed : [embed]
    const embedData = embedList.map(item => item.toLowerCase())

    const userId = user.id
    const updatedUser = {...user}
    
    if (embedData.includes('posts')){
        updatedUser.posts = getPostsByUserId(id)
    }
    
    if (embedData.includes('albums')){
        updatedUser.comments = getAlbumsByUserId(id)
    }

    
    return updatedUser
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

const sliceData = (data, { start, end, limit }) => {
    if (!data || data.length === 0){
        return data
    }

    const startParam = start ? start : 0
    const endParam = end ? end : data.length

    return data.slice(startParam, endParam)
    console.log(start)
    console.log(end)
    console.log(limit)
}


app.post('/comments', (req, res, next) => {
    const newComment = req.body
    newComment.id = Math.random().toString().slice(2, 7)
    newComment.creationDate = new Date()
    comments.unshift(newComment)
    
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
    const embed = req.query._embed

    const response = users.map(user => embedUser(user, embed))

    res.send(response)
})

app.get('/users/:id', (req, res, next) => {
    const { id } = req.params
    const embed = req.query._embed
    
    const response = embedUser(getUserById(id), embed)

    res.send(response)
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



app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))