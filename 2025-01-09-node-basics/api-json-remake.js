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

app.get('/users', (req, res, next) => {
    const { embed } = req.query
    if (Array.isArray(embed)){

    } else {

    }
    res.send(users)
})

app.get('/users/:id', (req, res, next) => {
    const { id } = req.params
    const foundUser = users.find(user => user.id === id)
    res.send(foundUser)
})

app.delete('/users/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = users.findIndex(user => user.id === id)
    if (foundIndex !== -1){
        users.splice(foundIndex, 1)
    } 
    res.send(users)
})

app.listen(3001, () => console.log("Server is running on 3001"))