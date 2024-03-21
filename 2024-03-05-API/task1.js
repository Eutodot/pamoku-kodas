const searchForm = document.querySelector('#search-form')
const pElement = document.querySelector('p')


// searchForm.addEventListener('submit', event => {
    // event.preventDefault()
    // const searchInput = searchForm.querySelector('#search-phrase').value

    // if (searchInput == ''){

    //     pElement.textContent = 'Type in a name.'

    // } else {
        // fetch(`https://api.agify.io?name=${searchInput}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         let age = data.age

        //         fetch(`https://api.nationalize.io/?name=${searchInput}`)
        //                     .then(response => response.json())
        //                     .then(data => {
        //                         let country = data.country[0].country_id

        //                         fetch(`https://api.genderize.io?name=${searchInput}`)
        //                         .then(response => response.json())
        //                         .then(data => {
        //                             let gender = data.gender

        //                             pElement.textContent = `${searchInput} probably is a ${gender} lives in ${country} and is ${age} years old`
        //                         })
        //                     })
        //     })

        
        


    // }
// })
searchForm.addEventListener('submit', getData)

async function getData(event){
    event.preventDefault()
    const searchInput = searchForm.querySelector('#search-phrase').value

    if (searchInput == ''){

        pElement.textContent = 'Type in a name.'

    } else {

        // const ageRes = await fetch(`https://api.agify.io?name=${searchInput}`)   
        // const countryRes = await fetch(`https://api.nationalize.io/?name=${searchInput}`)   
        // const genderRes = await fetch(`https://api.genderize.io?name=${searchInput}`) 

        // const ageData = await ageRes.json()
        // const countryData = await countryRes.json()
        // const genderData = await genderRes.json()
        
        // let age = ageData.age
        // let country = countryData.country[0].country_id
        // let gender = genderData.gender

        // pElement.textContent = `${searchInput} probably is a ${gender} lives in ${country} and is ${age} years old.`

        const age = await getAge(searchInput)
        const country = await getCountry(searchInput)
        const gender = await getGender(searchInput)

        
        pElement.textContent = `${searchInput} probably is a ${gender} lives in ${country} and is ${age} years old.`
    }
}

async function getAge(input){
    const res = await fetch(`https://api.agify.io?name=${input}`)   
    const data = await res.json()
    const age = data.age
    return age
}
async function getCountry(input){
    const res = await fetch(`https://api.agify.io?name=${input}`)   
    const data = await res.json()
    const country = data.country[0].country_id
    return country
}
async function getGender(input){
    const res = await fetch(`https://api.agify.io?name=${input}`)   
    const data = await res.json()
    const gender = data.gender
    return gender
}


