// let h1Element = document.querySelector('h1')
// let buttonElement = document.querySelector('button')
// let inputElement = document.querySelector('input')

// buttonElement.addEventListener('click', () => {
//     h1Element.textContent = 'hello'
//     buttonElement.setAttribute('disabled', true)
// })

// inputElement.addEventListener('input', () => {
//     h1Element.textContent = inputElement.value
//     buttonElement.removeAttribute('disabled')
// })

let h3Element = document.createElement('h3')
let buttonPlus = document.createElement('button')
let buttonMinus = document.createElement('button')
let buttonPlus2 = document.createElement('button')
let buttonMinus2 = document.createElement('button')
let buttonPlus5 = document.createElement('button')
let buttonMinus5 = document.createElement('button')
let buttonSave = document.createElement('button')
let buttonReset = document.createElement('button')
let inputElement = document.createElement('input')
let h4Element = document.createElement('h4')
let ulElement = document.createElement('ul')
let divElement = document.querySelector('#numbers')
let hasGrades = false
inputElement.type = 'number'
inputElement.min = 1
inputElement.max = 10
divElement.append(
    h3Element,
    buttonPlus,
    buttonPlus2,
    buttonPlus5,
    buttonMinus,
    buttonMinus2,
    buttonMinus5,
    inputElement,
    buttonSave,
    buttonReset,
    h4Element,
    ulElement
)
const INITIAL_NUM = 5
let num = INITIAL_NUM
h3Element.textContent = num
// h3Element.style.color = 'green'
buttonPlus.textContent = '+ 1'
buttonMinus.textContent = '- 1'
buttonPlus2.textContent = '+ 2'
buttonMinus2.textContent = '- 2'
buttonPlus5.textContent = '+ 5'
buttonMinus5.textContent = '- 5'
buttonReset.textContent = 'Reset'
h4Element.textContent = 'Grades:'
buttonSave.textContent = 'Save grade'

buttonPlus.addEventListener('click', () => {
    checkData(1)
})
buttonMinus.addEventListener('click', () => {
    checkData(-1)
})
buttonReset.addEventListener('click', () => {
    num = INITIAL_NUM
    let grades = document.querySelectorAll('.grade-item')
        grades.forEach(grade => {
            grade.remove()
    })
    document.querySelector('#button-delete-all').remove()
    hasGrades = false
    
    checkData(0)
})
buttonPlus2.addEventListener('click', () => {
    checkData(2)
})
buttonMinus2.addEventListener('click', () => {
    checkData(-2)
})
buttonPlus5.addEventListener('click', () => {
    checkData(5)
})
buttonMinus5.addEventListener('click', () => {
    checkData(-5)
})
inputElement.addEventListener('input', () => {
    if (inputElement.value > 10){
        inputElement.value = 10
    }
    if (inputElement.value < 1){
        inputElement.value = 1
    }
    num = Number(inputElement.value)
    checkData(0)
})
buttonSave.addEventListener('click', createElement)

function createElement(){
    let liElement = document.createElement('li')
    liElement.classList.add('grade-item')
    liElement.textContent = num
    liElement.style.color = h3Element.style.color
    let buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'X'
    liElement.append(buttonDelete)
    ulElement.prepend(liElement)

    if (!hasGrades){
        createButtonDeleteAll()
        hasGrades = true
    }

    buttonDelete.addEventListener('click', () => {
        liElement.remove()

        if (ulElement.children.length === 0){
            document.querySelector('#button-delete-all').remove()
            hasGrades = false
        }
    })
}

function createButtonDeleteAll(){
    let buttonDeleteAll = document.createElement('button')
    buttonDeleteAll.id = 'button-delete-all'
    buttonDeleteAll.textContent = 'Delete all grades'
    buttonReset.after(buttonDeleteAll)
    

    buttonDeleteAll.addEventListener('click', () => {
        let grades = document.querySelectorAll('.grade-item')
        grades.forEach(grade => {
            grade.remove()
        })
        buttonDeleteAll.remove()
        hasGrades = false
    })
}
function checkData(change){
    num += change
    h3Element.textContent = num
    
    inputElement.value = h3Element.textContent
    
    if (num >= 10){
        // inputElement.value = 10
        buttonPlus.setAttribute('disabled', true)
        // inputElement.setAttribute('disabled', true)
    } else {
        buttonPlus.removeAttribute('disabled')
        // inputElement.removeAttribute('disabled')
    }
    
    if (num >= 9){
        buttonPlus2.setAttribute('disabled', true)
    } else {
        buttonPlus2.removeAttribute('disabled')
    }
    
    if (num >= 6){
        buttonPlus5.setAttribute('disabled', true)
    } else {
        buttonPlus5.removeAttribute('disabled')
    }
    
    if (num > 1){
        buttonMinus.removeAttribute('disabled')
        // inputElement.removeAttribute('disabled')
    } else {
        buttonMinus.setAttribute('disabled', true)
        // inputElement.setAttribute('disabled', true)
    }
    
    if (num > 2){
        buttonMinus2.removeAttribute('disabled')
    } else {
        buttonMinus2.setAttribute('disabled', true)
    }
    
    if (num > 5){
        buttonMinus5.removeAttribute('disabled')
    } else {
        buttonMinus5.setAttribute('disabled', true)
    }
    
    
    if (num >= 7){
        h3Element.style.color = 'green'
    } else if (num >= 4){
        h3Element.style.color = 'orange'
    } else {
        h3Element.style.color = 'red'
    }
}

checkData(0)



















