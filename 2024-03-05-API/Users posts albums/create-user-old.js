import { firstLetterUpperCase } from "./src/functions.js"
import createHeader from "./header.js"

async function init(){
    const header = createHeader()
    document.body.prepend(header)


    const createUserForm = document.querySelector('#user-form')
    createUserForm.addEventListener('submit', async event => {
        event.preventDefault()
        const name = event.target.name.value
        const username = event.target.username.value
        const email = event.target.email.value
        const street = event.target.street.value
        const suite = event.target.suite.value
        const city = event.target.city.value
        const zipCode = event.target["zip-code"].value
        const latitude = event.target.latitude.value
        const longitude = event.target.longitude.value
        const phone = event.target.phone.value
        const website = event.target.website.value
        const companyName = event.target["company-name"].value
        const companyCatchPhrase = event.target["company-catch-phrase"].value
        const companyBs = event.target["company-bs"].value


        const newUser = {
            name,
            username,
            email,
            address: {
                street,
                suite,
                city,
                zipcode: zipCode,
                geo: {
                    lat: latitude,
                    lng: longitude,
                }
            },
            phone,
            website,
            company: {
                name: companyName,
                catchPhrase: companyCatchPhrase,
                bs: companyBs,
            }
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const createdUser = await response.json()
        createUserForm.after(createUser(createdUser))
    })
}

function createUser(info){
    console.log(info)
    const postWrapper = document.createElement('div')

    const titleElement = document.createElement('h2')
    titleElement.textContent = info.name

    const usernameElement = document.createElement('p')
    usernameElement.textContent = `Username: ${info.username}`

    const emailElement = document.createElement('p')
    emailElement.textContent = `Email: ${info.email}`

    const addressElement = document.createElement('a')
    addressElement.textContent = `Address: ${info.address.street} ${info.address.suite}, ${info.address.city}, zip code: ${info.address.zipcode}`
    addressElement.href = `https://www.google.com/maps/search/?api=1&query=${info.address.geo.lat}%2C${info.address.geo.lng}`
    addressElement.target = '_blank'

    const phoneElement = document.createElement('p')
    phoneElement.textContent = `Phone number: ${info.phone}`

    const websiteElement = document.createElement('p')
    websiteElement.textContent = `Website: ${info.website}`

    const workElement = document.createElement('p')
    workElement.textContent = `Work: ${info.company.name}`

    const workCatchPhraseElement = document.createElement('p')
    workCatchPhraseElement.textContent = `${info.company.name}'s catch phrase: ${info.company.catchPhrase}`

    const workBsElement = document.createElement('p')
    workBsElement.textContent = `${info.company.name}'s bs: ${info.company.bs}`
    
    postWrapper.append(titleElement,usernameElement, emailElement, addressElement, phoneElement, websiteElement, workElement, workCatchPhraseElement, workBsElement)

    return postWrapper
}

init()