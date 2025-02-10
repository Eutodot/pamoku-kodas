const express = require('express')

const { getUsers, getUserById } = require('../services/users')

const router = express.Router()

router.get('/', (req, res, next) => {
    const response = getUsers(req.query)

    res.send(response)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const embed = req.query._embed
    
    const response = embedUser(getUserById(id), embed)

    res.send(response)
})

router.post('/', (req, res, next) => {
    const newUser = req.body
    newUser.id = Math.random().toString().slice(2, 7)
    newUser.creationDate = new Date()
    users.push(newUser)
    
    res.send(newUser)
})

router.put('/:id', (req, res, next) => {
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

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    const foundIndex = users.findIndex(user => user.id === id)
    if (foundIndex !== -1){
        users.splice(foundIndex, 1)
    } 
    res.send(users)
})