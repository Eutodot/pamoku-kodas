class Person {
    constructor(firstName, lastName, age, birth){
        this.name = firstName
        this.surname = lastName
        this.age = age
    }

    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

let person1 = new Person('John', 'Doe', {age: 65, birth: 1988})
let person2 = new Person('Dohn', 'Joe', 45)

console.log(person1)
console.log(person2.getFullName())