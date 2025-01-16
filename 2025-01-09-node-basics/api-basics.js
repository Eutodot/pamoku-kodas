const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const names = ["Steve", "John"]
const people = [
    {
        name: "Steve",
        surname: "Jobs",
        age: 56
    },
    {
        name: "John",
        surname: "Pork",
        age: 12
    }
]

app.get('/', (req, res, next) => {
    res.send(`
        <h1>Hello</h1>
        <ul>
            <li><a href="/names">Names</a></li>
            <li><a href="/people">People</a></li>
        </ul>    
    `)
})

app.get('/names', (req, res, next) => {
    const namesList = names.map(name => `<li>${name}</li>`).join('')
    res.send(`
        <h1>Names:</h1>
        <a href="/new-name">Add new name</a>
        <ul>
            ${namesList}
        </ul>    
    `)
})

app.get('/people', (req, res, next) => {
    const peopleList = people.map(person => `<li>${person.name} ${person.surname} (${person.age})</li>`).join('')
    res.send(`
        <h1>People:</h1>
        <a href="/new-person">Add new person</a>
        <ul>
            ${peopleList}
        </ul>    
    `)
})

app.get('/people/:name', (req, res, next) => {
    console.log(req.params)
    const { name } = req.params
    const foundPeople = people.filter(person => person.name.toLowerCase() === name.toLowerCase())

    if (foundPeople.length === 0){
        res.send(`<h1>No people named ${name} were found</h1>`)
    } else {
        const peopleList = foundPeople.map(person => `<li>${person.name} ${person.surname} (${person.age})</li>`).join('')

        res.send(`
            <h1>People:</h1>
            <ul>
                ${peopleList}
            </ul>    
        `)
    }


    // const peopleList = people.map(person => `<li>${person.name} ${person.surname} (${person.age})</li>`).join('')
    // res.send(`
    //     <h1>People:</h1>
    //     <a href="/new-person">Add new person</a>
    //     <ul>
    //         ${peopleList}
    //     </ul>    
    // `)
})

app.get('/new-name', (req, res, next) => {
    res.send(`
        <form action="/add-name" method="POST">
            <input type="text" name="name"/>

            <button type="submit">Add</button>
        </form>  
    `)
})

app.get('/new-person', (req, res, next) => {
    res.send(`
        <form action="/add-person" method="POST">
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="surname" placeholder="surname"/>
            <input type="number" name="age" placeholder="age"/>

            <button type="submit">Add</button>
        </form>  
    `)
})

app.post('/add-name', (req, res, next) => {
    const { name } = req.body
    names.push(name)
    res.redirect(`/names`)
})

app.post('/add-person', (req, res, next) => {
    const person = req.body
    people.push(person)
    res.redirect(`/people`)
})

app.get('/names-list', (req, res, next) => {
    res.send(names)
})

app.post('/names-list', (req, res, next) => {
    const { name } = req.body
    names.push(name)
    res.send("ok")
})

app.listen(3000, () => console.log("Server is running on 3000"))