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



type UnknownEmployee = Employee | Admin

const printInfo = (employee: UnknownEmployee) => {
    console.log(employee.name)
    if ('startDate' in employee){
        console.log(employee.startDate)
    }
    
    if ('privileges' in employee){
        console.log(employee.privileges)
    }
}

printInfo(employee1)



/////////////////// Discriminated union type


type Bird = {
    flyingSpeed: number
    type: "bird"
}
type Horse = {
    runningSpeed: number
    type: "horse"
}
type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
    // console.log(animal.runningSpeed)     // Neleidzia

    // if ('runningSpeed' in animal){
    //     console.log(animal.runningSpeed)
    // }

    switch(animal.type){
        case 'bird':
            console.log(animal.flyingSpeed)
            break
        case 'horse':
            console.log(animal.runningSpeed)
            break
        default:
    }
}

moveAnimal({type: "bird", flyingSpeed: 12})


////////////////////// HTML

// const paragraph = document.querySelector('p')!


// const paragraph = document.getElementById('paragraph')


// const userInput = <HTMLInputElement>document.getElementById('userInput')!    // 1 budas

// const userInput = document.getElementById('userInput')! as HTMLInputElement     // 2 budas



const userInput = document.getElementById('userInput')    // 3 budas

if (userInput){
    (userInput as HTMLInputElement).value = "John"
}



function add4(a: number, b: number): number;
function add4(a: string, b: string): string;
function add4(a: string, b: number): string;
function add4(a: number, b: string): string;
function add4(a: Combinable2, b: Combinable2){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }

    return a + b
}

const answer = add4('text1', 'text 2')
// answer.split('r')

const answer2 = add4(2, "2")
// answer2.split('r')



//////////////////////////////////////// Generic type


// const names = ['John', 'Steve']
// const names = []
// const names: Array<string> = []
// const names: Array<number> = []
// const names: Array<any> = []
// const names: Array<string | number> = []


const names: string[] = []
// const names: number[] = []
// const names: any[] = []
// const names: string[] | number[] = []

// names[0].split('s')


const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise is done')
    }, 2000)
})

promise.then(data => {
    // console.log(data.split(" "))
})


/////////////////////////////////// Custom generic types

// const merge = (obj1: object, obj2: object) => {
//     return Object.assign(obj1, obj2)
// }

// const mergedObj = merge({name: "john"}, {age: 54}) as {name: string, age: number}


// function merge<T extends Object, U>(obj1: T, obj2: U){
//     return Object.assign(obj1, obj2)
// }


function merge<T extends object, U extends object>(obj1: T, obj2: U){
    // return Object.assign({}, obj1, obj2)
    return {...obj1, ...obj2}
}

const mergedObj = merge({name: "john", hobbies: ['1', '2']}, {age: 54})

const mergedObj2 = merge({name: "Bob", lastName: "Steve"}, {age: 89})

console.log(mergedObj.hobbies[0])
console.log(mergedObj2.lastName)

// const mergedObj3 = merge({name: "Mark", lastName: "Fish"}, 89)      // neveiks
const mergedObj3 = merge({name: "Mark", lastName: "Fish"}, {age: 34})      // veiks

console.log(mergedObj3.age)





type Len = {
    length: number
}

function countAndDescribe<T extends Len>(element: T): [T, string]{
    let describeText = 'no value'

    if (element.length === 1){
        describeText = 'one element'
    } else if (element.length >= 1) {
        describeText = `it has ${element.length} elements`
    }

    return [element, describeText]
}

console.log(countAndDescribe('hello'))      // veikia nes string turi length
console.log(countAndDescribe(['1', '2', '3']))      // veikia nes array turi length
// console.log(countAndDescribe(5))      // neveikia nes number neturi length
console.log(countAndDescribe({length: 7}))      // veikia nes turi property length
// console.log(countAndDescribe({length: "helo"}))      // neveikia nes length turi buti number






























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  GRYZTI PRIE INDEX PROPERTIES


