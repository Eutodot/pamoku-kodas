const selectElement = document.querySelector('#select-category')
const categoryForm = document.querySelector('#category-form')
const searchForm = document.querySelector('#search-form')
const pElement = document.querySelector('p')
console.dir(categoryForm)
fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => response.json())
    .then(data => {
        data.forEach(category => {
            const optionElement = document.createElement('option')
            optionElement.classList.add('category-option')
            optionElement.value = category
            optionElement.textContent = category
            selectElement.append(optionElement)
            categoryForm['category-submit'].removeAttribute('disabled')
        });
    })

categoryForm.addEventListener('submit', event => {
    event.preventDefault()
    
    if (selectElement.value == 'random'){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                pElement.textContent = data.value
            })
    } else {
        fetch(`https://api.chucknorris.io/jokes/random?category=${selectElement.value}`)
            .then(response => response.json())
            .then(data => {
                pElement.textContent = data.value
            })
    }
})
searchForm.addEventListener('submit', event => {
    event.preventDefault()
    const searchInput = searchForm.querySelector('#search-phrase').value

    if (searchInput == ''){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                pElement.textContent = data.value
            })
    } else {
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.total > 0){
                    let randomNumInArr = Math.floor(Math.random() * data.total)
                    let theJoke = data.result[randomNumInArr].value
                    pElement.textContent = theJoke
                } else {
                    pElement.textContent = `No joke with phrase "${searchInput}" was found.`
                }
            })
    }
})