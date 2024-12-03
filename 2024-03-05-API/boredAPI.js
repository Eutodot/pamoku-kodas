const activityForm = document.querySelector('#activity-form')
const submitButton = document.querySelector('#submit')

init()

async function init(){
    activityForm.addEventListener('submit', async event => {
        event.preventDefault()
        
        const typeSelect = activityForm.querySelector('#type-select')
        const participantsInput = activityForm.querySelector('#participants-input')
        const minPriceInput = activityForm.querySelector('#min-price-input')
        const maxPriceInput = activityForm.querySelector('#max-price-input')
        const minAccessibilityInput = activityForm.querySelector('#min-accessibility-input')
        const maxAccessibilityInput = activityForm.querySelector('#max-accessibility-input')
        const pElement = document.querySelector('#activity-text')
        let link = 'https://www.boredapi.com/api/activity?'

        if (typeSelect.value != 'random'){
            link = link + `type=:${typeSelect.value}&`
        }

        if (participantsInput.value != '' || participantsInput.value != 0){
            link = link + `participants=${participantsInput.value}&`
        }
        
        if (minPriceInput.value == maxPriceInput.value){
            link = link + `price=${minPriceInput.value}&`
        } else (
            link = link + `minprice=${minPriceInput.value}&maxprice=${maxPriceInput.value}&`
        )

        if (minAccessibilityInput.value == maxAccessibilityInput.value){
            link = link + `accessibility=${minAccessibilityInput.value}`
        } else (
            link = link + `minaccessibility=${minAccessibilityInput.value}&maxaccessibility=${maxAccessibilityInput.value}`
        )

        pElement.textContent = await getData(link)
        
    })

}

async function getData(link){
    const response = await fetch(link)
    const activityObj = await response.json()
    let activityText = ''
    if (activityObj.error === undefined){
        activityText = `Activity: ${activityObj.activity}, price: ${activityObj.price}, participants: ${activityObj.participants}, accessibility: ${activityObj.accessibility}`
    } else {
        activityText = activityObj.error
    }
    return activityText
}
