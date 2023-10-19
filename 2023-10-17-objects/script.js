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





















