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
    console.log(data.split(" "));
});
