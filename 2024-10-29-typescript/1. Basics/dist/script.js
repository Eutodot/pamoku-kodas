"use strict";
const button = document.querySelector('button');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
let test = 5;
let test2;
test2 = '4';
const add = (num1, num2) => {
    return num1 + num2;
};
button.addEventListener('click', () => {
});
const person = {
    name: 'John',
    age: 45
};
const person2 = {
    name: 'John',
    age: 45
};
const product = {
    id: '28f',
    price: 20,
    tags: ['fruit', 'sweet'],
    details: {
        title: 'blabla',
        description: 'blublu'
    }
};
const arr1 = [2, 9, 4];
const arr2 = [6, 'string', false];
const person3 = {
    name: 'Jane',
    age: 5,
    hobbies: ['drawing', 'playing']
};
for (const hobby of person3.hobbies) {
}
let hobbiesArr;
hobbiesArr = ['labas'];
hobbiesArr = [5];
const person4 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: [1, 'admin']
};
person4.role.push('ibsfsf');
person4.role[1] = 10;
const person5 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: [1, 'admin']
};
person5.role.push('ibsfsf');
person5.role[0] = 10;
person5.role = [5, 'admin'];
const person6 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: 'READ_ONLY'
};
const ADMIN = 0;
const READ_ONLY = 1;
const person7 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: READ_ONLY
};
if (person7.role === READ_ONLY) { }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
const person8 = {
    name: 'John',
    age: 54,
    hobbies: ['1', '2', '3'],
    role: Role.READ_ONLY
};
if (person8.role === Role.READ_ONLY) { }
const combine = (input1, input2) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const number1 = 5.8;
const combine2 = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return Number(result);
    }
    else {
        return result.toString();
    }
};
const combine3 = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return Number(result);
    }
    else {
        return result.toString();
    }
};
const user1 = {
    name: 'John',
    age: 65
};
const hello = (user) => {
    console.log('Hello, ' + user.name);
};
const isOlder = (user, checkAge) => {
    return checkAge > user.age;
};
const subtract = (input1, input2) => {
    return input1 - input2;
};
const printResult = (num) => {
    if (num < 0) {
        return;
    }
    console.log('Result ' + num);
};
let add2;
add2 = add;
console.log(add2(1, 2));
