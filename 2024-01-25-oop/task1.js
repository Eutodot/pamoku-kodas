class Car {
    constructor(brand, model, engine, basePrice, mileage){
        this.brand = brand
        this.model = model
        this.engine = engine
        this.basePrice = basePrice
        this.mileage = mileage
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

        return basePrice + enginePrice - mileageDiscount
    }

    getDiscount(discount){
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
}

let newCar1 = new Car ('BMW', 'e30', 'petrol', 10000, -120000)
let newCar2 = new Car ('Volkswagen', 'ID. Buzz Cargo', 'electric', 65000, 0)

console.log(newCar1.getMileageDiscount())
console.log(newCar2)