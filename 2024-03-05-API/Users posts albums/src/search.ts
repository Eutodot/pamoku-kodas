import { getUrlParams, firstLetterUpperCase } from "./functions.ts"
import createHeader from "./header.ts"
import createSearchResult from "./search-result.ts"

async function init(){
    const contentElement = document.querySelector('#content')!

    const header = createHeader()
    contentElement.prepend(header)

    const searchPhrase = getUrlParams('search-input')
    const searchPlace = getUrlParams('search-select')
    console.log(searchPhrase)

    const searchResult = await createSearchResult(searchPhrase, searchPlace)
    contentElement.append(searchResult)

    
}

init()

