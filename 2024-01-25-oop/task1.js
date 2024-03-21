class Car {
    constructor({brand, model, engine, basePrice, mileage, color, img, discount}){
        this.brand = brand
        this.model = model
        this.engine = engine ? engine : 'petrol'
        this.basePrice = Number(basePrice)
        this.mileage = mileage ? Number(mileage) : 0
        this.color = color ? color : 'white'
        this.img = img
        this.discount = discount ? discount : 0
        this.baseColors = ['black', 'red', 'blue', 'silver', 'white', 'special blue']
    }

    turnOn(){
        if (this.engine == 'electric'){
            alert('Zooom')
        } else if (this.engine == 'diesel'){
            alert('Vroom')
        } else if (this.engine == 'petrol'){
            alert('Gvbroom')
        } else {
            alert('Brooom')
        }
    }

    getPrice(){
        let basePrice = this.basePrice
        let mileageDiscount = this.getMileageDiscount()
        let enginePrice = this.getEnginePrice()
        let colorPrice = this.getColorPrice()

        return basePrice + enginePrice - mileageDiscount + colorPrice
    }

    getDiscount(){
        let discount = this.discount
        let price = this.getPrice()
        if (discount >= 0 && discount <= 90){
            return price - price / 100 * discount
        }
        
        if (discount > 90){
            console.warn('Discount is too high')
            return price - price / 100 * 90
        }

        console.warn('Discount is too low')
        return price
    }

    getMileageDiscount(){
        let mileage = this.mileage
        let basePrice = this.basePrice

        if (mileage < 0){
            console.error('Mileage is invalid')
            return 0
        }

        if (mileage == 0){
            return 0
        }

        if (mileage <= 20000){
            return basePrice / 100 * 10
        }

        if (mileage <= 40000){
            return basePrice / 100 * 15
        }

        if (mileage <= 100000){
            return basePrice / 100 * 20
        }

        if (mileage <= 400000){
            return basePrice / 100 * 30
        }

        if (mileage > 400000){
            return basePrice / 100 * 50
        }

        
    }

    getEnginePrice(){
        let engine = this.engine

        if (engine == 'electric'){
            return 10000
        }
        
        if (engine == 'diesel'){
            return 5000
        }
        
        if (engine == 'petrol'){
            return 0
        }
        
        console.error('Engine type is invalid')
        return 0
    }

    getColorPrice(){
        let chosenColor = this.color

        if (chosenColor == 'special blue'){
            return 500
        }

        if (this.baseColors.includes(chosenColor)){
            return 0
        }

        return 3000
    }

    getVAT(){
        let price = this.getDiscount()

        return price / 100 * 21
    }

    getFullPrice(){
        let price = this.getDiscount()

        return price + this.getVAT()
    }

    renderElement(){
        const carItem = document.createElement('div')
        carItem.classList.add('car-item')

        if (this.img){
            const imageElement = document.createElement('img')
            imageElement.src = this.img
            carItem.append(imageElement)
        }

        const titleElement = document.createElement('h2')
        titleElement.classList.add('car-title')
        titleElement.textContent = `${this.brand} ${this.model}`
        carItem.append(titleElement)

        const specsListElement = document.createElement('ul')
        specsListElement.classList.add('car-specs-list')
        carItem.append(specsListElement)

        specsListElement.innerHTML = `
            <li class="car-spec-item">Mileage: ${this.mileage}km</li>
            <li class="car-spec-item">Color: ${this.color}</li>
            <li class="car-spec-item">Engine: ${this.engine}</li>
            <li class="car-spec-item">Base price: $${this.basePrice}</li>`

        const fullPriceButton = document.createElement('button')
        fullPriceButton.textContent = 'Show full price'
        let fullPriceOpen = false
        carItem.append(fullPriceButton)

        fullPriceButton.addEventListener('click', () => {
            fullPriceButton.remove()

            const priceListElement = document.createElement('ul')
            priceListElement.classList.add('car-price-list')
            carItem.append(priceListElement)

            priceListElement.innerHTML = `
                <li class="car-spec-item">Base price: $${this.basePrice}</li>
                <li class="car-spec-item">Extra services cost: $${this.getColorPrice() + this.getEnginePrice()}</li>
                <li class="car-spec-item">Mileage discount: $${this.getMileageDiscount()}</li>
                <li class="car-spec-item">Chosen discount: ${this.discount}%</li>
                <li class="car-spec-item">Value-added tax (21%): $${this.getVAT()}</li>
                <li class="car-spec-item">Price with value-added tax: $${this.getFullPrice()}</li>`
        })

        return carItem
    }
}

let newCarParams = {
    brand: 'BMW',
    model: 'E30', 
    basePrice: 10000, 
    mileage: 120000, 
    img: 'https://cdn.shopify.com/s/files/1/0161/4694/files/IMG_1925_Large_d8d5f001-a2ca-43e3-be52-49cd685bb39b_600x600.jpg',
    discount: 10,
}

let newCar1 = new Car (newCarParams)
let newCar2 = new Car ({
    brand: 'Volkswagen',
    model: 'ID. Buzz Cargo', 
    engine: 'electric', 
    basePrice: 65000, 
    color: 'yellow', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6Jq0czEBYD2cbHeXCrME9jVdpvM1gvoAOA&usqp=CAU',
})

console.log(newCar1.getDiscount())
console.log(newCar2)

let carsList = document.querySelector('#cars-list')
carsList.append(newCar1.renderElement(), newCar2.renderElement())

const carForm = document.querySelector('#car-form')
carForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const form = event.target
    const {brand, model, engine, mileage, color, image, discount} = form
    const basePrice = form['base-price']

    let createdCar = new Car ({
        brand: brand.value,
        model: model.value,
        engine: engine.value,
        basePrice: basePrice.value,
        mileage: mileage.value,
        color: color.value,
        img: image.value,
        discount: Number(discount.value),
    })

    carsList.prepend(createdCar.renderElement())
})