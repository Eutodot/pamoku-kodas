import { getUrlParams, firstLetterUpperCase } from "./src/functions.js"
import createHeader from "./header.js"
import createSearchResult from "./search-result.js"

async function init(){
    const contentElement = document.querySelector('#content')

    const header = createHeader()
    contentElement.prepend(header)

    const searchPhrase = getUrlParams('search-input')
    const searchPlace = getUrlParams('search-select')
    console.log(searchPhrase)

    const searchResult = await createSearchResult(searchPhrase, searchPlace)
    contentElement.append(searchResult)

    
}

init()

