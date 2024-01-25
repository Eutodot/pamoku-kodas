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
    grades: [9, 10, 4, 6, 7],
    address: {
      city: 'Vilnius',
      street: 'Taikos g.',
    },
    getFullName: function(){
      return `Full name is ${this.name} ${this['second name']} ${this.lastName}.`
    },
    setStudentInactive: function(){
      this.isActive = false
    },
    setStudentActive(){
      this.isActive = true
    },
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
studentObj["second name"] = 'Peter'
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


console.log(studentObj.grades)
console.log(studentObj.grades[0])

for (let i = 0; i < studentObj.grades.length; i++) {
  const element = studentObj.grades[i];
  console.log(element)
}

studentObj.grades.forEach(grade => {
  console.log(grade)
});

let grades = studentObj.grades

grades.forEach(grade => {
  console.log(grade)
});

studentObj.hobbies = ['reading', 'running']

studentObj.hobbies.push('hiking')

console.log(studentObj.hobbies)


console.log(studentObj.address)
console.log(studentObj.address.city)
console.log(studentObj.address.street)

studentObj.address.apartment = 15

console.log(studentObj.address.apartment)


//pirmas budas

// studentObj.contacts = {
//   email: 'adodfon@gmail.com',
//   phone: '3700651183',
// }

// studentObj.contacts = {}

studentObj.contacts = new Object()

studentObj.contacts.email = 'adodfon@gmail.com'
studentObj.contacts.phone = '3700651183'

console.log(studentObj.contacts)
console.log(studentObj.contacts.email)
console.log(studentObj.contacts.phone)

console.log(studentObj.getFullName())


console.log(studentObj.isActive)
studentObj.setStudentInactive()
console.log(studentObj.isActive)




studentObj.switchStudentActivity = function(){
  // if (this.isActive){
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive
}






















