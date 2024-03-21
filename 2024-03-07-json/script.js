const obj = {
  name: 'John',
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddress() {
    return `Address is: ${this.address.street} ${this.address.city}, ${this.address.country}.`
  },
  test1: undefined,
  test2: null,
}
// console.log(obj.name)
// console.log(obj['age'])
// console.log(obj.children[0])
// console.log(obj.address.city)
// console.log(obj.getAddress())

// Įprastas objektas
console.log(obj)

// Objektas paverčiamas į JSON objektą

let json = JSON.stringify(obj)
console.log(json)

// JSON objektą paverčiamas į objektas

let convertedJson = JSON.parse(json)
console.log(convertedJson)



fetch('obj.json')
    .then(res => {
        return res.json()
    })
    .then(obj => {
        console.log(obj)
    })
console.log(1)



