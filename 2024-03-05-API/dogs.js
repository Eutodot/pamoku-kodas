const selectElement = document.querySelector('#select-category')
const categoryForm = document.querySelector('#category-form')
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        // console.log(data.message.australian)
        const breedsObj = data.message
        let breedsArr = Object.keys(breedsObj)
        breedsArr.forEach(breed => {
            if (breedsObj[breed].length > 0){
                let subBreedsArr = breedsObj[breed]
                subBreedsArr.forEach(subBreed => {
                    const optionElement = document.createElement('option')
                    optionElement.classList.add('category-option')
                    optionElement.value = `${breed}/${subBreed}`
                    optionElement.textContent = `${breed} ${subBreed}`
                    selectElement.append(optionElement)
                })
            } else {
                const optionElement = document.createElement('option')
                optionElement.classList.add('category-option')
                optionElement.value = breed
                optionElement.textContent = breed
                selectElement.append(optionElement)
            }
            
            
            categoryForm['category-submit'].removeAttribute('disabled')
        });
    })
    
    categoryForm.addEventListener('submit', event => {
        event.preventDefault()
        
        const imgWrapper = document.querySelector('#img-wrapper')
        const image = imgWrapper.querySelector('img')

        if (selectElement.value == 'random'){
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    console.log(data.message)
                    image.src = data.message
                    // pElement.textContent = data.value
                })
        } else {
            fetch(`https://dog.ceo/api/breed/${selectElement.value}/images/random`)
                .then(response => response.json())
                .then(data => {
                    image.src = data.message
                })
        }
    })












    