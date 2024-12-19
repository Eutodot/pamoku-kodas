"use strict";
const admin1 = {
    name: "john",
    privileges: ['sfg', 'sfa'],
    access: 'hhh'
};
const employee1 = {
    name: "john",
    startDate: new Date()
};
const elevatedEmployee1 = {
    name: "john",
    privileges: ['sfg', 'sfa'],
    startDate: new Date(),
    access: 'fff'
};
const test456 = 5;
const add3 = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
const printInfo = (employee) => {
    console.log(employee.name);
    if ('startDate' in employee) {
        console.log(employee.startDate);
    }
    if ('privileges' in employee) {
        console.log(employee.privileges);
    }
};
printInfo(employee1);
const moveAnimal = (animal) => {
    switch (animal.type) {
        case 'bird':
            console.log(animal.flyingSpeed);
            break;
        case 'horse':
            console.log(animal.runningSpeed);
            break;
        default:
    }
};
moveAnimal({ type: "bird", flyingSpeed: 12 });
const userInput = document.getElementById('userInput');
if (userInput) {
    userInput.value = "John";
}
function add4(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const answer = add4('text1', 'text 2');
const answer2 = add4(2, "2");
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise is done');
    }, 2000);
});
promise.then(data => {
});
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const mergedObj = merge({ name: "john", hobbies: ['1', '2'] }, { age: 54 });
const mergedObj2 = merge({ name: "Bob", lastName: "Steve" }, { age: 89 });
console.log(mergedObj.hobbies[0]);
console.log(mergedObj2.lastName);
const mergedObj3 = merge({ name: "Mark", lastName: "Fish" }, { age: 34 });
console.log(mergedObj3.age);
function countAndDescribe(element) {
    let describeText = 'no value';
    if (element.length === 1) {
        describeText = 'one element';
    }
    else if (element.length >= 1) {
        describeText = `it has ${element.length} elements`;
    }
    return [element, describeText];
}
console.log(countAndDescribe('hello'));
console.log(countAndDescribe(['1', '2', '3']));
console.log(countAndDescribe({ length: 7 }));
