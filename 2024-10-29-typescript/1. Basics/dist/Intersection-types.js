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
