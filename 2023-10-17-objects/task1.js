let company1 = {
    'company name': 'Kompany',
    opened: 1999,
    companyCode: 886279,
    employees: 1203,
    ceo: 'John Doe',
    nvo: true,
    workingLocations: ['JAV', 'Lithuania', 'China'],
    activityAreas: ['research', 'marketing'],
    contacts: {
        phone: 806955842,
        email: 'lovely.Kompany@gmail.com',
        address: {
            county: 'Lithuania',
            city: 'Utena',
            street: 'Lanku g.',
            apartment: 54,
        },
    },
    getAddress: function(){
        return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.county}`
    },
    setNvoStatusInactive(){
        this.nvo = false
    },
    setNvoStatusActive(){
        this.nvo = true
    },
    setNvoStatusActive(){
        this.nvo = !this.nvo
    },
    getWorkingLocations(){
        return this.workingLocations.join(', ')
    },
    getActivityAreas(){
        return this.activityAreas.join(', ')
    },
    addNewWorkingLocation: function(newLocation){
        this.workingLocations.push(newLocation)
    },
    addNewActivityArea: function(newActivity){
        this.activityAreas.push(newActivity)
    },
    removeWorkingLocation: function(locationToRemove){
        this.workingLocations = this.workingLocations.filter(location => location != locationToRemove)
        return this.workingLocations
    },
    removeActivityArea: function(activityToRemove){
        // this.activityAreas = this.activityAreas.filter(activity => activity != activityToRemove)
        let updatedActivityAreas = this.activityAreas.filter(activity => activity != activityToRemove)
        this.activityAreas = updatedActivityAreas
        return this.activityAreas
    },
}


let company2 = {}
company2['company name'] = 'Gompany'
company2.opened = 1999
company2.companyCode = 972688
company2.employees = 1203
company2.ceo = 'Dohn Joe'
company2.nvo = false
company2.workingLocations = ['China', 'Lithuania', 'JAV']
company2.activityAreas = ['marketing', 'research']
company2.contacts = {}
company2.contacts.phone = 806354882
company2.contacts.email = 'hateful.Gompany@yahoo.com'
company2.contacts.address = {}
company2.contacts.address.county = 'Lithuania'
company2.contacts.address.city = 'Utena'
company2.contacts.address.street = 'Lanku g.'
company2.contacts.address.apartment = 55
company2.getAddress = function(){
    return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.county}`
}
company2.setNvoStatusInactive = function(){
    this.nvo = false
}
company2.setNvoStatusActive = function(){
    this.nvo = true
}
company2.setNvoStatusActive = function(){
    this.nvo = !this.nvo
}
company2.getWorkingLocations = function(){
    return this.workingLocations.join(', ')
}
company2.getActivityAreas = function(){
    return this.activityAreas.join(', ')
}
company2.addNewWorkingLocation = function(newLocation){
    this.workingLocations.push(newLocation)
}
company2.addNewActivityArea = function(newActivity){
    this.activityAreas.push(newActivity)
}
company2.removeWorkingLocation = function(locationToRemove){
    this.workingLocations = this.workingLocations.filter(location => location != locationToRemove)
    return this.workingLocations
}
company1.removeActivityArea = function(activityToRemove){
    let updatedActivityAreas = this.activityAreas.filter(activity => activity != activityToRemove)
    this.activityAreas = updatedActivityAreas
    return this.activityAreas
}



// console.log(company1.getActivityAreas())
// console.log(company1.addNewActivityArea('education'))
// console.log(company1.getActivityAreas())
// console.log(company1.removeActivityArea('education'))
// console.log(company1.getActivityAreas())
// console.log(company2)


let arr = [1, 12, 2, 22]
// let filteredArr = arr.filter(item => item > 10)

// console.log(filteredArr)

for (let i = 0; i < arr.length; i++){
    console.log('for ciklas', arr[i])
}

let mapArr = arr.map((item) => {
    console.log('map ciklas', item)
    // return item * 2
})

let forEachArr = arr.forEach((item) => {
    console.log('forEach ciklas', item)
    // return item * 2
})

// console.log(mapArr)
// console.log(forEachArr)
let n = 0
while (n < arr.length){
    console.log('while ciklas', arr[n])
    n++
}


let m = 0
do {
    console.log('do...while ciklas', arr[m])
    m++
} while (m < arr.length)


for (let num of arr){
    console.log('for...of ciklas', num)
}

//loop through object

console.log(company1)
for (let property in company1){
    console.log(company1[property])
}











