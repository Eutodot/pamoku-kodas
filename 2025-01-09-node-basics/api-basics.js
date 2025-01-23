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
        id: "1",
        name: "Steve",
        surname: "Jobs",
        age: 56,
        slug: "steve-jobs"
    },
    {
        id: "2",
        name: "John",
        surname: "Pork",
        age: 12,
        slug: "john-pork"
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
    const namesList = names.map(name => `<li>>${name}</li>`).join('')
    res.send(`
        <h1>Names:</h1>
        <a href="/new-name">Add new name</a>
        <ul>
            ${namesList}
        </ul>    
    `)
})

app.get('/people', (req, res, next) => {
    const peopleList = people.map(person => `<li><a href="/person/${person.slug}">${person.name} ${person.surname} (${person.age})</a></li>`).join('')
    res.send(`
        <h1>People:</h1>
        <a href="/new-person">Add new person</a>
        <ul>
            ${peopleList}
        </ul>    
    `)
})

app.get('/person', (req, res, next) => {
    res.redirect(`/people`)
})

app.get('/person/:slug', (req, res, next) => {
    const { slug } = req.params
    const foundPerson = people.find(person => person.slug === slug)
    
    if (!foundPerson){
        res.send(`<h1>This person doesn't exist</h1>`)
    } else {
        res.send(`
            <h1>${foundPerson.name} ${foundPerson.surname} (${foundPerson.age})</h1>
        `)
    }
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
    person.id = Math.random().toString().slice(2, 7)
    const slug = generatePersonSlug(person)
    person.slug = slug
    people.push(person)
    res.redirect(`/people`)
})

app.get('/names-list', (req, res, next) => {
    res.send(names)
})

app.post('/api/names-list', (req, res, next) => {
    const { name } = req.body
    names.push(name)
    res.send("ok")
})

app.get('/api/people-list', (req, res, next) => {
    res.send(people)
})

app.post('/api/people-list', (req, res, next) => {
    const person = req.body
    person.id = Math.random().toString().slice(2, 7)
    people.push(person)
    res.send("ok")
})

app.get('/api/people-list/:id', (req, res, next) => {
    const { id } = req.params
    const foundPerson = people.find(person => person.id === id)
    res.send(foundPerson)
})

app.put('/api/people-list/:id', (req, res, next) => {
    const { id } = req.params
    const newPerson = req.body
    //const foundPerson = people.find(person => person.id === id)
    const updatedPerson = { 
        ...newPerson,
        id,
        slug: generatePersonSlug({...newPerson, id})
    }

    const foundIndex = people.findIndex(person => person.id === id)
    if (foundIndex !== -1){
        people.splice(foundIndex, 1, updatedPerson)
    } 
    res.send(people)
})

app.delete('/api/people-list/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = people.findIndex(person => person.id === id)
    if (foundIndex !== -1){
        people.splice(foundIndex, 1)
    } 
    // const updatedPeople = people.filter(person => person.id !== id)
    // people.splice(0, people.length, ...updatedPeople)
    res.send(people)
})

function generatePersonSlug(person){
    const slug = person.name.toLowerCase() + '-' + person.surname.toLowerCase()
    if (people.findIndex(person => person.slug === slug) === -1){
        return slug
    } else {
        return slug + '-' + person.id
    }
}

app.listen(3000, () => console.log("Server is running on 3000"))