/*

Studentas 1:
  - Vardas: John,
  - Pavarde: Doe,
  - Amzius: 25,
  - Miestas: Vilnius,
  - Grupe: FEU9,
  - Antras vardas: Steve


Objekto sintaksė:

let obj = {
  key: 'value',
}

*/

let studentObj = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    city: 'Vilnius',
    group: 'FEU9',
    'second name': 'Steve',
}


// Objekto properties paemimas

console.log(studentObj['name'])
console.log(studentObj['lastName'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['second name'])


console.log(studentObj.name)
console.log(studentObj.lastName)
console.log(studentObj.age)
console.log(studentObj.city)
console.log(studentObj.group)
console.log(studentObj["second name"])



let propertyName = 'age'
console.log(studentObj[propertyName])


// Objekto properties pakeitimas

console.log(studentObj.age)
studentObj.age = 30
console.log(studentObj.age)

console.log(studentObj["second name"])
studentObj["second name"] = 'Peteris'
console.log(studentObj["second name"])



// Objekto properties sukurimas

console.log(studentObj.isActive)
studentObj.isActive = true
console.log(studentObj.isActive)


console.log(studentObj["birth city"])
studentObj["birth city"] = 'Kaunas'
console.log(studentObj["birth city"])



// Objekto properties istrynimas

console.log(studentObj["birth city"])
delete studentObj["birth city"]
console.log(studentObj["birth city"])














