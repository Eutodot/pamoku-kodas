class Person {
    constructor(firstName, lastName, age = 0){
        this.name = firstName
        this.surname = lastName
        this.age = age
    }

    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

// let person1 = new Person('John', 'Doe', {age: 65, birth: 1988})
let person2 = new Person('John', 'Joe', 45)
let person3 = new Person('Pork', 'Joe')

// console.log(person1)
console.log(person2.getFullName())


class Company {
    constructor(params){
        this['company name'] = params['company name']
        this.opened = params.opened
        this.companyCode = params.companyCode
        this.employees = params.employees
        this.ceo = params.ceo
        this.nvo = params.nvo == false ? params.nvo : true
        this.workingLocations = params.workingLocations
        this.activityAreas = params.activityAreas
        this.contacts = params.contacts
    }

    getAddress(){
        return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.county}`
    }
    setNvoStatusInactive(){
        this.nvo = false
    }
    setNvoStatusActive(){
        this.nvo = true
    }
    setNvoStatusActive(){
        this.nvo = !this.nvo
    }
    getWorkingLocations(){
        return this.workingLocations.join(', ')
    }
    getActivityAreas(){
        return this.activityAreas.join(', ')
    }
    addNewWorkingLocation(newLocation){
        this.workingLocations.push(newLocation)
    }
    addNewActivityArea(newActivity){
        this.activityAreas.push(newActivity)
    }
    removeWorkingLocation(locationToRemove){
        this.workingLocations = this.workingLocations.filter(location => location != locationToRemove)
        return this.workingLocations
    }
    removeActivityArea(activityToRemove){
        let updatedActivityAreas = this.activityAreas.filter(activity => activity != activityToRemove)
        this.activityAreas = updatedActivityAreas
        return this.activityAreas
    }
}

let company1Params = {
    'company name': 'Kompany',
    opened: 1999,
    companyCode: 886279,
    ceo: 'John Doe',
    employees: 1203,
    workingLocations: ['JAV', 'Lithuania', 'China'],
    activityAreas: ['research', 'marketing'],
    contacts: {
        phone: 806955842,
        email: 'lovely.Kompany@gmail.com',
        address: {
            county: 'Lithuania',
            city: 'Utena',
            street: 'Lanku g.',
            apartment: 54,
        },
    },
}


let company1 =new Company(company1Params)
let company2 = new Company({
    opened: 1999,
    'company name': 'Kompany',
    companyCode: 886279,
    employees: 1203,
    ceo: 'John Doe',
    nvo: false,
    workingLocations: ['JAV', 'Lithuania', 'China'],
    activityAreas: ['research', 'marketing'],
    contacts: {
        phone: 806955842,
        email: 'lovely.Kompany@gmail.com',
        address: {
            county: 'Lithuania',
            city: 'Utena',
            street: 'Lanku g.',
            apartment: 54,
        },
    },
})

console.log(company1)
console.log(company2)





//Base class
//Super class for mammal class

class Animal {
    constructor(legs, color, gender, warmBlooded){
        this.legs = legs
        this.color = color
        this.gender = gender
        this.warmBlooded = warmBlooded
    }

    eat(){
        return 'Im eating'
    }

    sleep(){
        return 'Im sleeping'
    }
}

//Sub-class for animal class

class Mammal extends Animal {
    constructor(legs, color, gender, givesBirth){
        super()
        this.legs = legs
        this.color = color
        this.gender = gender
        this.warmBlooded = true
        this.givesBirth = givesBirth
    }

    test(){
        return 'trsting'
    }
}

let animal1 = new Animal(4, 'white', 'male', true)
let mammal1 = new Mammal(4, 'white', 'male', true)
console.log(animal1.test())
console.log(mammal1.sleep())