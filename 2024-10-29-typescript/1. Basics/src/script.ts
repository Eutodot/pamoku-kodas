const button = document.querySelector('button')!    // ! reiskia, kad selector niekada negrazins null ir visada bus reiksme
const input1 = document.querySelector('#num1')! as HTMLInputElement     // pasako, kad elementas yra input elementas
const input2 = document.querySelector('#num2')! as HTMLInputElement

let test = 5
let test2: string  // nusako kintamojo tipa
test2 = '4'

const add = (num1: number, num2: number) => {
    return num1 + num2
}

button.addEventListener('click', () => {
    // console.log(add(+input1.value, +input2.value))
})

/////// Object

const person = {
    name: 'John',
    age: 45
}

// console.log(person)
//console.log(person.surname)

const person2: {
    name: string
    age: number
} = {
    name: 'John',
    age: 45
}

// console.log(person2.name)

////// Nested objects

const product: {
    id: string
    price: number
    tags: string[]
    details: {
        title: string
        description: string
    }
} = {
    id: '28f',
    price: 20,
    tags: ['fruit', 'sweet'],
    details: {
        title: 'blabla',
        description: 'blublu'
    }
}

////// Array

const arr1 = [2, 9 ,4]
const arr2 = [6, 'string', false]

const person3 = {
    name: 'Jane',
    age: 5,
    hobbies: ['drawing', 'playing']
}

for (const hobby of person3.hobbies){
    // console.log(hobby.toUpperCase())
}

let hobbiesArr: any[]
//hobbiesArr = 'labas'       // error
hobbiesArr = ['labas']
hobbiesArr = [5]


////// Tople

const person4 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: [1, 'admin']
}

person4.role.push('ibsfsf')
person4.role[1] = 10


const person5: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
} = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: [1, 'admin']
}

person5.role.push('ibsfsf')
//person5.role[1] = 10      // neveiks!
person5.role[0] = 10      // veiks!
//person5.role = []       // neveiks!
//person5.role = [5]       // neveiks!
person5.role = [5, 'admin']       // veiks!
//person5.role = [5, 'admin', true]       // neveiks!





/////// enum

// enum EnumExample { ONE, TWO, THREE }
//                     0    1     2     -prideda automatiskai


const person6 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    // role: [1, 'admin']
    // role: 1
    role: 'READ_ONLY'
}

// if (person6.role === 'READ_ONLY'){}
// if (person6.role === 'READ-ONLY'){}      // Nepatogu
// if (person6.role === 'READ ONLY'){}


const ADMIN = 0
const READ_ONLY = 1

const person7 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    // role: [1, 'admin']
    // role: 1
    role: READ_ONLY
}


if (person7.role === READ_ONLY){}

enum Role { ADMIN, READ_ONLY, USER }
//            0        1        2
// enum Role { ADMIN = 5, READ_ONLY, USER }
//               5            6        7
// enum Role { ADMIN = 5, READ_ONLY = 100, USER = 200 }
//               5          100             200
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, USER = 200 }
//         'ADMIN'              100            200


const person8 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: Role.READ_ONLY
}

if (person8.role === Role.READ_ONLY){}


///////// union type

const combine = (input1: string | number, input2: string | number) => {
    let result: string | number

    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    return result
}

// const sum = combine(30, 15)
// console.log("🚀 ~ sum:", sum)
// const txt = combine('Hello', ' World')
// console.log("🚀 ~ txt:", txt)


//////// literal type

const number1 = 5.8

const combine2 = (
    input1: string | number,
    input2: string | number,
    // resultConversion: string
    resultConversion: 'as-number' | 'as-text'
) => {
    let result: string | number

    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    if (resultConversion === 'as-number'){
        return Number(result)
    } else {
        return result.toString()
    }
}

// const sum2 = combine2(30, 18, 'as-text')
// console.log("🚀 ~ sum:", sum2)
// const txt2 = combine2('Hello', ' Mornin', 'as-text')
// console.log("🚀 ~ txt:", txt2)

// const txt3 = combine2('Hello', ' Mornin', 'as-wjat')
// console.log("🚀 ~ txt:", txt3)



///////// aliases

type Combinable = number | string
type Conversion = 'as-number' | 'as-text'

const combine3 = (
    input1: Combinable,
    input2: Combinable,
    resultConversion: Conversion
) => {
    let result: Combinable

    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    if (resultConversion === 'as-number'){
        return Number(result)
    } else {
        return result.toString()
    }
}

// const sum3 = combine3(30, 18, 'as-text')
// console.log("🚀 ~ sum3:", sum3)
// const txt3 = combine3('Hello', ' Mornin', 'as-text')
// console.log("🚀 ~ txt3:", txt3)


type User = {
    name: string
    age: number
}

const user1: User = {
    name: 'John',
    age: 65
} 

// const hello = (user: {name: string; age: number}) => {
//     console.log('Hello, ' + user.name)
// }
const hello = (user: User) => {
    console.log('Hello, ' + user.name)
}



// const isOlder = (user: {name: string; age: number}, checkAge: number) => {
//     return checkAge > user.age 
// }
const isOlder = (user: User, checkAge: number) => {
    return checkAge > user.age 
}



////////// functions

const subtract = (input1: number, input2: number): number => {
    return input1 - input2
    // return input1.toString() + input2.toString()
}

// const answer1 = subtract(3, 1)
// console.log("🚀 ~ answer1:", answer1)


const printResult = (num: number): void => {
    if (num < 0){
        return
    } 
    console.log('Result ' + num)
}

//let add2

//add2 = add  // veikia
// add2 = 5    // neveikia nes add2 type yra 'any'

let add2: Function

add2 = add  // veikia
//add2 = 5    // klaida nes add2 type yra 'function'

console.log(add2(1, 2))



















