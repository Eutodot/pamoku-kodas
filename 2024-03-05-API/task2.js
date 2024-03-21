const categoryForm = document.querySelector('#category-form')
const pElement = document.querySelector('p')
const selectElement = document.querySelector('#select-attribute')

const labelElement = document.createElement('label')
labelElement.for = 'search-input'
const submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.id = 'category-submit'
submitButton.textContent = 'Search'



selectElement.addEventListener('click', event => {
    categoryForm.textContent = ''

    switch(event.target.value){
        case 'type':
            labelElement.textContent = 'Select type:'
    
            const selectTypeElement= document.createElement('select')
            selectElement.name = 'search-input'
            selectElement.id = 'search-input'
            const typeArr = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
    
            typeArr.forEach(type => {
                const optionTypeElement = document.createElement('option')
                optionTypeElement.value = type
                optionTypeElement.textContent = type
                selectTypeElement.append(optionTypeElement)
            })
    
            categoryForm.prepend(labelElement, selectTypeElement, submitButton)
            break
        case 'participants':
            labelElement.textContent = 'Type in amount of participants:'
    
            const amountInput = document.createElement('input')
            amountInput.type = 'number'
            amountInput.name = 'search-input'
            amountInput.id = 'search-input'
            amountInput.min = 0
    
            categoryForm.prepend(labelElement, amountInput, submitButton)
            break
    
        case 'price':
            labelElement.textContent = 'Type in the price 0 being free and 1 expensive:'
    
            const priceInput = document.createElement('input')
            priceInput.type = 'number'
            priceInput.name = 'search-input'
            priceInput.id = 'search-input'
            priceInput.min = 0
            priceInput.max = 1
            priceInput.step = 0.01

            categoryForm.prepend(labelElement, priceInput, submitButton)
            break
            
        case 'price-range':
            labelElement.textContent = 'Type in the price range 0 being free and 1 expensive:'
    
            const priceRangeInput1 = document.createElement('input')
            priceRangeInput1.type = 'number'
            priceRangeInput1.name = 'search-input'
            priceRangeInput1.id = 'search-input'
            priceRangeInput1.min = 0
            priceRangeInput1.max = 1
            priceRangeInput1.step = 0.01

            const priceRangeInput2 = document.createElement('input')
            priceRangeInput2.type = 'number'
            priceRangeInput2.name = 'search-input'
            priceRangeInput2.id = 'search-input'
            priceRangeInput2.min = 0
            priceRangeInput2.max = 1
            priceRangeInput2.step = 0.01

            categoryForm.prepend(labelElement, priceRangeInput1, priceRangeInput2, submitButton)
            break
    
    
        case 'accessibility':
            labelElement.textContent = 'Type in a number with 0 being the most accessible:'
    
            const accessibilityInput = document.createElement('input')
            accessibilityInput.type = 'number'
            accessibilityInput.name = 'search-input'
            accessibilityInput.id = 'search-input'
            accessibilityInput.min = 0
            accessibilityInput.max = 1
            accessibilityInput.step = 0.01

            categoryForm.prepend(labelElement, accessibilityInput, submitButton)
            break
            
        case 'accessibility-range':
            labelElement.textContent = 'Type in a number range with 0 being the most accessible:'
    
            const accessibilityRangeInput1 = document.createElement('input')
            accessibilityRangeInput1.type = 'number'
            accessibilityRangeInput1.name = 'search-input'
            accessibilityRangeInput1.id = 'search-input'
            accessibilityRangeInput1.min = 0
            accessibilityRangeInput1.max = 1
            accessibilityRangeInput1.step = 0.01

            const accessibilityRangeInput2 = document.createElement('input')
            accessibilityRangeInput2.type = 'number'
            accessibilityRangeInput2.name = 'search-input'
            accessibilityRangeInput2.id = 'search-input'
            accessibilityRangeInput2.min = 0
            accessibilityRangeInput2.max = 1
            accessibilityRangeInput2.step = 0.01

            categoryForm.prepend(labelElement, accessibilityRangeInput1, accessibilityRangeInput2, submitButton)
            break
    
    }        
})

async function init(){
    categoryForm.addEventListener('submit',async event => {
        event.preventDefault()
        
        
    
    })

}

async function getData(link){
    const response = await fetch(link)
    const obj = await response.json()
    pElement.textContent = `Activity: ${obj.activity}, price: ${obj.price}, participants: ${obj.participants}`
}
getData()
