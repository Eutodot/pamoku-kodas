localStorage.setItem('test', 'labas')

console.log(localStorage.getItem('test'))


localStorage.removeItem('test')

console.log(localStorage.getItem('test'))


let personAge = 40
personAge++
console.log(personAge, typeof personAge)

localStorage.setItem('age', personAge)
let localStorageAge = localStorage.getItem('age')
console.log(localStorageAge, typeof localStorageAge)

let person = {
    age: 16,
    name: 'John',
}

console.log(person, typeof person)
console.log(person['age'])
console.log(person.age)
person.age = 17
console.log(person.age)

let personJson = JSON.stringify(person)
console.log(personJson, typeof personJson)

localStorage.setItem('person', personJson)

let localPersonJson = localStorage.getItem('person')
console.log(localPersonJson, typeof localPersonJson)

let localPerson = JSON.parse(localPersonJson)

console.log(localPerson)
console.log(localPerson.age)

let arr = [1, 'lo', 5]

localStorage.setItem('arr', JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('arr')))

localStorage.removeItem('person')
localStorage.removeItem('arr')
localStorage.removeItem('age')




