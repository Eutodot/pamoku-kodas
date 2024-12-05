// Intersection types

type Admin = {
    name: string
    privileges: string[]
    access: string
}

type Employee = {
    name: string
    startDate: Date
}

// type ElevatedEmployee = {
//     name: string
//     startDate: Date
//     privileges: string[]
// }
type ElevatedEmployee = Admin & Employee

const admin1: Admin = {
    name: "john",
    privileges: ['sfg', 'sfa'],
    access: 'hhh'
    //startDate: new Date()
}

const employee1: Employee = {
    name: "john",
    //privileges: ['sfg', 'sfa'],
    startDate: new Date()
}
const elevatedEmployee1: ElevatedEmployee = {
    name: "john",
    privileges: ['sfg', 'sfa'],
    startDate: new Date(),
    access: 'fff'
}






type Combinable2 = number | string
type Numeric = number | boolean
type Universal = Combinable2 & Numeric

//const test456: Universal = 'test'       // Neveiks nes neatitinka Numeric
//const test456: Universal = true         // Neveiks nes neatitinka Combinable2
const test456: Universal = 5              // Veiks nes atitinka abu


const add3 = (a: Combinable2, b: Combinable2): Combinable2 => {
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }

    return a + b
}




















