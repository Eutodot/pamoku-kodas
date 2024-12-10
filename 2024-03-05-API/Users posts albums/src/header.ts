import { MENU_ITEMS } from "./config.ts"
import { firstLetterUpperCase } from "./functions.ts"

export default function createHeader(){
    const headerElement = document.createElement('header')
    const menuElement = document.createElement('ul')
    MENU_ITEMS.forEach(item => {
        const liElement = document.createElement('li')
        const itemLink = document.createElement('a')
        itemLink.textContent = item.title
        itemLink.href = item.url
        liElement.append(itemLink)
        menuElement.append(liElement)
    })

    const searchForm = document.createElement('form')
    searchForm.id = 'search-form'
    searchForm.action = 'search.html'

    const selectLabel = document.createElement('label')
    selectLabel.for = 'search-select'
    selectLabel.textContent = 'Select search place: '
    const searchSelect = document.createElement('select')
    searchSelect.name = 'search-select'
    searchSelect.id = 'search-select'

    const optionsArr = ['all',  'users', 'posts', 'comments', 'albums', 'photos']
    optionsArr.forEach(option => {
        const optionElement = document.createElement('option')
        optionElement.value = option
        optionElement.textContent = option

        searchSelect.append(optionElement)
    })

    const inputLabel = document.createElement('label')
    inputLabel.for = 'search-input'
    inputLabel.textContent = 'Type in the search phrase: '
    const searchInput = document.createElement('input')
    searchInput.name = 'search-input'
    searchInput.id = 'search-input'

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.textContent = 'Search'

    searchForm.append(selectLabel, searchSelect, inputLabel, searchInput, submitButton)

    headerElement.append(menuElement, searchForm)

    return headerElement
}


