const contactsForm = document.querySelector('#contacts-form')
const studentsList = document.querySelector('#students-list')
let studentBeingEdited = null
const INITIAL_DATA = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 32,
        telephone: '888888888',
        email: 'JohnDoe@mail.com',
        knowledge: 5,
        group: 'group 1gr.',
        languages: ['javascript', 'python'],
        id: 1,
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 30,
        telephone: '777777777',
        email: 'JaneDoe@mail.com',
        knowledge: 2,
        group: 'group 1gr.',
        languages: ['javascript'],
        id: 2,
    },
    {
        firstName: 'Lis',
        lastName: 'Sobeck',
        age: 36,
        telephone: '555555555',
        email: 'LisSobeck@mail.com',
        knowledge: 10,
        group: 'group 2gr.',
        languages: ['javascript', 'python', 'c++', 'c-sharp'],
        id: 3,
    },
    {
        firstName: 'Ted',
        lastName: 'Grape',
        age: 58,
        telephone: '444444444',
        email: 'TedGrape@mail.com',
        knowledge: 6,
        group: 'group 5gr.',
        languages: [],
        id: 4,
    },
    {
        firstName: 'Mark',
        lastName: 'Beard',
        age: 17,
        telephone: '333333333',
        email: 'MarkBeard@mail.com',
        knowledge: 3,
        group: 'group 3gr.',
        languages: ['c++', 'c-sharp'],
        id: 5,
    }
]

init()

contactsForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const form = event.target
    const submitButton = document.querySelector('#submit')
    let selectedLanguages = form.querySelectorAll('input[name="language"]:checked')
    let selectedLanguagesArr = []
    selectedLanguages.forEach(element => {
        selectedLanguagesArr.push(element.value)
    })
    const {age, telephone, email, knowledge, group} = form
    const firstName = form['first-name']
    const lastName = form['last-name']
    const studentId = Math.random()

    
    let formIsValid = validateForm(form)

    if (!formIsValid){
        createErrorMessage(form)
        return
    }
    

    let newStudent = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        telephone: telephone.value,
        email: email.value,
        knowledge: knowledge.value,
        group: group.value,
        languages: selectedLanguagesArr,
        id: studentId,
    }

    

    

    if (studentBeingEdited){
        newStudent.id = Number(studentBeingEdited.dataset.idNumber)
        studentBeingEdited.replaceWith(createStudentElement(newStudent, form))
        editLocalStudent(newStudent)
        submitButton.textContent = 'Submit'
        studentBeingEdited = null
        alertText(`Student ${newStudent.firstName} ${newStudent.lastName} was successfully edited`)
    } else {
        studentsList.prepend(createStudentElement(newStudent, form))
        createLocalStudent(newStudent)
        alertText(`Student ${newStudent.firstName} ${newStudent.lastName} was created`)
    }

    removeSavedFieldsData()
    form.reset()
})

const rangeInput = document.querySelector('#knowledge')
const rangeInputValue = document.querySelector('#rangeValueOutput')
rangeInputValue.textContent = rangeInput.value
rangeInput.addEventListener('input', (event) => {
    rangeInputValue.textContent = event.target.value
})

function alertText(text){
    const previousAlertMessage = document.getElementById('alert-message')
    if (previousAlertMessage){
        previousAlertMessage.remove()
    }
    const alertMessage = document.createElement('span')
    alertMessage.id = 'alert-message'
    alertMessage.textContent = text
    document.body.append(alertMessage)

    setTimeout(function(){
        alertMessage.remove()
    }, 5000)
}

function createInputErrorMessage(inputField, errorText){
    inputField.classList.add('invalid-input-box')
    const warningText = document.createElement('span')
    warningText.classList.add('input-error-message')
    warningText.textContent = errorText
    inputField.after(warningText)
    return false
}

function createErrorMessage(form){
    const warningElement = document.createElement('span')
    warningElement.classList.add('error-message')
    warningElement.textContent = '*Fill mandatory fields'
    form.append(warningElement)
}

function validateForm(form){
    const {age, telephone} = form
    const firstName = form['first-name']
    const lastName = form['last-name']

    // console.log(form.elements)
    let formIsValid = true

    const previousErrorMessage = form.querySelector('.error-message')
    previousErrorMessage && previousErrorMessage.remove()

    const previousInputErrorMessages = form.querySelectorAll('.input-error-message')
    previousInputErrorMessages.forEach(element => element.remove())

    const invalidInputs = form.querySelectorAll('.invalid-input-box')
    invalidInputs.forEach(element => element.classList.remove('invalid-input-box'))

    const requiredFields = form.querySelectorAll(':required')
    // console.log(requiredFields)
    requiredFields.forEach(input => {
        // console.log(input)
        // console.log(input.type)
        // console.log(input.dataset.fieldTitle)

        if (input.value.length == 0){
            formIsValid = createInputErrorMessage(input, '*This field is required')
            return
        }

        if (input.type == 'text'){
            if (input.value.length < 2){
                let inputTitle = input.dataset.title ? firstLetterUpperCase(input.dataset.title) : 'Text in this field'
                formIsValid = createInputErrorMessage(input, `*${inputTitle} has to be at least 2 characters long`)
            }
            return
        }
        
        if (input.type == 'tel'){
            if (input.value.length < 9){
                formIsValid = createInputErrorMessage(input, '*Phone number is too short')
            } else if (input.value.length > 11){
                formIsValid = createInputErrorMessage(input, '*Phone number is too long')

            }
            return
        }

    })


    // if (firstName.value.length == 0){
    //     formIsValid = createInputErrorMessage(firstName, '*This field is required')
    // } else if (firstName.value.length < 2){
    //     formIsValid = createInputErrorMessage(firstName, '*First name has to be at least 2 characters long')
    // }

    // if (lastName.value.length == 0){
    //     formIsValid = createInputErrorMessage(lastName, '*This field is required')
    // } else if (lastName.value.length < 2){
    //     formIsValid = createInputErrorMessage(lastName, '*Last name has to be at least 2 characters long')
    // }

    if (age.value.length == 0){
        formIsValid = createInputErrorMessage(age, '*This field is required')
    } else if (age.value <= 0){
        formIsValid = createInputErrorMessage(age, '*Age has to be a positive number')
    } else if (age.value < 16){
        formIsValid = createInputErrorMessage(age, '*Student has to be at least 16 years old')
    } else if (age.value > 120){
        formIsValid = createInputErrorMessage(age, '*Student is too old')
    }

    // if (telephone.value.length != 0 && telephone.value.length < 9){
    //     formIsValid = createInputErrorMessage(telephone, '*Phone number is too short')
    // } else if (telephone.value.length != 0 && telephone.value.length > 11){
    //     formIsValid = createInputErrorMessage(telephone, '*Phone number is too long')
    // }

    return formIsValid
}

function firstLetterUpperCase(str){
    return str[0].toUpperCase() + str.slice(1)
}

function renderInitialData(data){
    data.forEach(student => {
        studentsList.prepend(createStudentElement(student, contactsForm, data))
    })
}

function createStudentElement(student, form){
    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')

    studentItem.dataset.idNumber = student.id

    const nameElement = document.createElement('h2')
    const firstNameElement = document.createElement('span')
    firstNameElement.classList.add('first-name')
    const lastNameElement = document.createElement('span')
    lastNameElement.classList.add('last-name')
    firstNameElement.textContent = student.firstName
    lastNameElement.textContent = student.lastName
    nameElement.append(firstNameElement, ' ', lastNameElement)
    studentItem.append(nameElement)
    
    
    const ageTextElement = document.createElement('p')
    const ageElement = document.createElement('span')
    ageElement.classList.add('age')
    ageElement.textContent = student.age
    ageTextElement.append('Age: ', ageElement)
    studentItem.append(ageTextElement)
    
    const telephoneTextElement = document.createElement('p')
    const telephoneElement = document.createElement('span')
    telephoneElement.classList.add('telephone')
    telephoneElement.textContent = '*****'
    telephoneTextElement.append('Telephone: ', telephoneElement)
    studentItem.append(telephoneTextElement)


    const emailTextElement = document.createElement('p')
    const emailElement = document.createElement('span')
    emailElement.classList.add('email')
    emailElement.textContent = '*****'
    emailTextElement.append('Email: ', emailElement)
    studentItem.append(emailTextElement)
    
    const knowledgeTextElement = document.createElement('p')
    const knowledgeElement = document.createElement('span')
    knowledgeElement.classList.add('knowledge')
    knowledgeElement.textContent = student.knowledge
    knowledgeTextElement.append('IT knowledge (1-10): ', knowledgeElement)
    studentItem.append(knowledgeTextElement)
    
    const groupTextElement = document.createElement('p')
    const groupElement = document.createElement('span')
    groupElement.classList.add('group')
    groupElement.textContent = student.group
    groupTextElement.append('Group: ', groupElement)
    studentItem.append(groupTextElement)

    const languagesTextElement = document.createElement('p')
    const languagesElement = document.createElement('span')
    languagesElement.classList.add('group')
    if (student.languages.length){
        languagesElement.textContent = student.languages.join(', ')
        languagesTextElement.append('Preferred programming languages: ', languagesElement)
    } else {
        languagesElement.textContent = ''
        languagesTextElement.append('Preferred programming languages not selected', languagesElement)
    }
    studentItem.append(languagesTextElement)



    const showStudentInfoButton = document.createElement('button')
    showStudentInfoButton.textContent = 'Show student info'
    studentItem.append(showStudentInfoButton)
    let infoIsHidden = true

    showStudentInfoButton.addEventListener('click', () => {
        if (infoIsHidden){
            infoIsHidden = false
            emailElement.textContent = student.email
            telephoneElement.textContent = student.telephone
            showStudentInfoButton.textContent = 'Hide student info'
        } else {
            infoIsHidden = true
            telephoneElement.textContent = '*****'
            emailElement.textContent = '*****'
            showStudentInfoButton.textContent = 'Show student info'
        }
    })


    const editStudentButton = document.createElement('button')
    editStudentButton.textContent = 'Edit student'
    studentItem.append(editStudentButton)

    editStudentButton.addEventListener('click', () => {
        const {age, telephone, email, knowledge, group, submit} = form
        const firstName = form['first-name']
        const lastName = form['last-name']
    
        studentBeingEdited = studentItem
        firstName.value = student.firstName
        lastName.value = student.lastName
        age.value = student.age
        telephone.value = student.telephone
        email.value = student.email
        knowledge.value = student.knowledge
        group.value = student.group

        let languagesCheckboxes = form.querySelectorAll('input[name="language"]')
        languagesCheckboxes.forEach(language => language.checked = false)

        student.languages.forEach(language => {
            let languageInput = form.querySelector(`input[type="checkbox"][value="${language}"]`)
            languageInput.checked = true
        })
        submit.textContent = 'Save Changes'
    })


    const deleteStudentButton = document.createElement('button')
    deleteStudentButton.textContent = 'Delete student'
    studentItem.append(deleteStudentButton)

    deleteStudentButton.addEventListener('click', () => {
        deleteLocalStudent(student.id)
        alertText(`Student ${student.firstName} ${student.lastName} was successfully deleted`)
        studentItem.remove()
    })

    // let idExists = false
    // studentItemsArr.forEach(item => {
    //     if (item.id == student.id){
    //         idExists = true
    //     }
    // })
    // if (!idExists){}
    


    return studentItem
}

function init(){
    
    renderInitialData(getLocalStudents())

    const filterForm = document.querySelector('#filter-form')

    filterForm.addEventListener('submit', event => {
        event.preventDefault()

        const form = event.target
        const filterField = form['filter-field']
        const searchBy = form['search-select'].value
        const filterPhrase = filterField.value.toLowerCase()
        
        const studentItems = document.querySelectorAll('.student-item')

        studentItems.forEach(student => filterStudents(student, filterPhrase, searchBy))

    })

    const {age, telephone, email, knowledge, group} = contactsForm
    const firstName = contactsForm['first-name']
    const lastName = contactsForm['last-name']
    let checkboxLanguages = contactsForm.querySelectorAll('input[name="language"]')

    contactsForm.addEventListener('input', event => {
        saveFieldData(event.target)
    })
    setFieldData(firstName)
    setFieldData(lastName)
    setFieldData(age)
    setFieldData(telephone)
    setFieldData(email)
    setFieldData(knowledge)
    setFieldData(group)
    setFieldData(checkboxLanguages)

}

function filterStudents(student, filterPhrase, searchBy){
    student.style.display = 'block'
    let hideStudent = false
    

    let studentData = ''
    switch (searchBy){
        case 'firstName':
            studentData = student.querySelector('.first-name').textContent.toLowerCase()

            if (!studentData.includes(filterPhrase)){
                hideStudent = true
            }

            break
        case 'lastName':
            studentData = student.querySelector('.last-name').textContent.toLowerCase()

            if (!studentData.includes(filterPhrase)){
                hideStudent = true
            }

            break
        case 'age':
            studentData = student.querySelector('.age').textContent.toLowerCase()

            if (studentData != filterPhrase){
                hideStudent = true
            }

            break
        case 'knowledge':
            studentData = student.querySelector('.knowledge').textContent.toLowerCase()

            if (studentData != filterPhrase){
                hideStudent = true
            }

            break
        case 'group':
            studentData = student.querySelector('.group').textContent.toLowerCase()

            if (!studentData.includes(filterPhrase)){
                hideStudent = true
            }

            break
        case 'languages':
            studentData = student.querySelector('.languages').textContent.toLowerCase()

            if (!studentData.includes(filterPhrase)){
                hideStudent = true
            }

            break
    }

    if (hideStudent){
        student.style.display = 'none'
    }
}

function saveFieldData(inputElement){
    if (inputElement.type == 'checkbox'){
        const checkboxGroupWrapper = inputElement.parentElement.parentElement
        let languagesCheckboxes = checkboxGroupWrapper.querySelectorAll(`input[name="${inputElement.name}"]:checked`)
        let selectedLanguages = [...languagesCheckboxes].map(check => check.id)
        localStorage.setItem(inputElement.name, JSON.stringify(selectedLanguages))
    } else {
        localStorage.setItem(inputElement.name, inputElement.value)
    }
}

function setFieldData(inputElement){
    let elementName = inputElement.length > 0 ? inputElement[0].name : inputElement.name
    
    if (localStorage.getItem(elementName)){
        if (elementName == 'language'){
            let returnedSelectedCheckboxes = JSON.parse(localStorage.getItem(elementName))
            let languagesCheckboxes = contactsForm.querySelectorAll('input[name="language"]')
            languagesCheckboxes.forEach(language => {
                language.checked = false
    
                returnedSelectedCheckboxes.forEach(id => {
                    if (language.id == id){
                        language.checked = true
    
                    }
                })
            })
        } else {
            inputElement.value = localStorage.getItem(elementName)
        }
    }
}

function removeSavedFieldsData(){
    localStorage.removeItem('first-name')
    localStorage.removeItem('last-name')
    localStorage.removeItem('age')
    localStorage.removeItem('telephone')
    localStorage.removeItem('email')
    localStorage.removeItem('knowledge')
    localStorage.removeItem('group')
    localStorage.removeItem('language')
}

function getLocalStudents(){
    let studentItemsLocalArr = localStorage.getItem('studentItemsArr')
    let studentItemsArr = studentItemsLocalArr ? JSON.parse(studentItemsLocalArr) : []
    return studentItemsArr
}

function createLocalStudent(studentData){
    let studentsArr = getLocalStudents()
    studentsArr.push(studentData)
    localStorage.setItem('studentItemsArr', JSON.stringify(studentsArr))
}

function editLocalStudent(updatedStudent){
    let studentItemsArr = getLocalStudents()
    let indexInLocalArr = studentItemsArr.findIndex(element => element.id == updatedStudent.id)
    studentItemsArr.splice(indexInLocalArr, 1, updatedStudent)
    localStorage.setItem('studentItemsArr', JSON.stringify(studentItemsArr))
}

function deleteLocalStudent(studentId){
    let studentItemsArr = getLocalStudents()
    let indexInLocalArr = studentItemsArr.findIndex(element => element.id == studentId)
    studentItemsArr.splice(indexInLocalArr, 1)
    localStorage.setItem('studentItemsArr', JSON.stringify(studentItemsArr))
}