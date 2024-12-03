const button = document.querySelector('button')
const input1 = document.querySelector('#num1')
const input2 = document.querySelector('#num2')

const add = (num1, num2) => {
    //Problema 1: num1 ir num2 yra string

    // return num1 + num2
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2
    } else {
        return +num1 + +num2
    }
}

button.addEventListener('click', () => {
    console.log(add(input1.value, input2.value))
})