console.groupCollapsed('basics')
//Masyvai/arrays

let numsArray = [1, 2, 3, 4, 5.3, 6]
//indeksai       0  1  2  3  4    5


console.log(numsArray)
console.log(numsArray.length)


let arr = [1, -1, 0, 'labas', false, [2, 3, 5]]
//indeksai 0   1  2  3        4      5
//indeksai                            0  1  2
console.log(arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[5][0])
// console.log(arr[5][1])
// console.log(arr[5][2])

for (let i = 0; i < numsArray.length; i++){
    console.log(numsArray[i])
}


// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])
// console.log(numsArray[4])

console.groupEnd()

console.groupCollapsed('methods')

//Array methods
let nums = [1, 4, 5, 10]
nums[1] = 'labas'
nums[nums.length] = 20
console.log(nums)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą

let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities);

// Pašalina paskutinį masyvo narį - pop() metodas
// console.log(cities.pop())
let lastCity = cities.pop()
console.log(lastCity)

console.log(cities)

// Pašalina pirmą masyvo narį - shift() metodas

let firstCity = cities.shift()
console.log(firstCity)
// cities.shift()
console.log(cities)

// Pridedamas naujas narys į masyvo pabaigą - push() metoras

let newArrayCount = cities.push('Elektrenai')
console.log(newArrayCount)
// cities.push('Druskininkai', 'Silute')
console.log(cities)

// Pridedamas narys į masyvo pradžią - ushift() metodas

let newArrayFront = cities.unshift('Utena')
console.log(newArrayFront)
// cities.unshift('Taurage', 'Ukmerge')
console.log(cities)



let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Indeksas           0           1        2          3         4         5
// Slice (+)    0           1         2         3         4          5
// Slice (-)   -6          -5        -4        -3        -2         -1

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log(countries);

let slicedCountries1 = countries.slice()
console.log(slicedCountries1)

let slicedCountries2 = countries.slice(2)
console.log(slicedCountries2)

let slicedCountries3 = countries.slice(2, 4)
console.log(slicedCountries3)

let slicedCountries4 = countries.slice(0, 3)
console.log(slicedCountries4)

let slicedCountries5 = countries.slice(-4)
console.log(slicedCountries5)

let slicedCountries6 = countries.slice(-4, -2)
console.log(slicedCountries6)

let slicedCountries7 = countries.slice(-4, 2)
console.log(slicedCountries7)

let slicedCountries8 = countries.slice(2, -2)
console.log(slicedCountries8)

let slicedCountries9 = countries.slice(-2, -4)
console.log(slicedCountries9)

let slicedCountries10 = countries.slice(4, 2)
console.log(slicedCountries10)

let slicedCountries11 = countries.slice(0, 1)
console.log(slicedCountries11)

console.log(countries);


// SPLICE - modifikuoja (mutuoja) originalų masyvą
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// let splicedNums = numbers.splice(2)

// let splicedNums = numbers.splice(2, 4)

// let splicedNums = numbers.splice(0, 1)

// let splicedNums = numbers.splice(2, 1)

// let splicedNums = numbers.splice(-1)

// let splicedNums = numbers.splice(-3, 2)

// let splicedNums = numbers.splice(-3, 2, 1)

// let splicedNums = numbers.splice(2, 0, 2.5)

let splicedNums = numbers.splice(2, 0, 2.5, 2.8)
console.log(splicedNums);

console.log(numbers);

console.groupEnd()

console.groupCollapsed('Big stupid task')

let taskArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
console.log(taskArray)


let task11 = taskArray.shift()
console.log(task11)

let task12 = taskArray.pop()
console.log(task12)

let task13 = taskArray.splice(10, 1)
console.log(task13)

let task14 = taskArray.splice(-2, 1)
console.log(task14)

let task15 = taskArray.splice(1, 1)
console.log(task15)

let task16 = taskArray.splice(6, 2)
console.log(task16)

let task17 = taskArray.splice(-6, 3)
console.log(task17)

let task18 = taskArray.splice(2, 1, 888)
console.log(task18)

let task19 = taskArray.splice(9, 1, 33, 789, 6543)
console.log(task19)

let task110 = taskArray.splice(-1, 1, 321, 654, 987)
console.log(task110)

let task111 = taskArray.splice(1, 0, 11)
console.log(task111)

let task112 = taskArray.splice(13, 0, 1)
console.log(task112)

let task113 = taskArray.splice(-1, 0, -1)
console.log(task113)

let task114 = taskArray.unshift(1, 2, 3)
console.log(task114)

let task115 = taskArray.push(-333, -321, -312)
console.log(task115)

let arrayMiddle = taskArray.length / 2
let task116 = taskArray.splice(arrayMiddle, 0, 0)
console.log(task116)

let task117 = taskArray.shift()
console.log(task117)

let task118 = taskArray.pop()
console.log(task118)

let task119 = taskArray.unshift('start')
console.log(task119)

let task120 = taskArray.push('end')
console.log(task120)


console.log(taskArray)


let task21 =  taskArray.slice(0, 1)
console.log(task21)

let task22 =  taskArray.slice(-1)
console.log(task22)

let task23 =  taskArray.slice(1, 2)
console.log(task23)

let task24 =  taskArray.slice(-2, -1)
console.log(task24)

let task25 =  taskArray.slice(7, 8)
console.log(task25)

let task26 =  taskArray.slice(-9, -8)
console.log(task26)

let arrayMiddle1 = taskArray.length / 2
let task27 =  taskArray.slice(arrayMiddle, -arrayMiddle)
console.log(task27)

let task28 =  taskArray.slice(0, 3)
console.log(task28)

let task29 =  taskArray.slice(-3)
console.log(task29)

let task210 =  taskArray.slice(0, 10)
console.log(task210)

let task211 =  taskArray.slice(-10)
console.log(task211)

let task212 =  taskArray.slice(2, 8)
console.log(task212)

let task213 =  taskArray.slice(-9, -4)
console.log(task213)

let task214 =  taskArray.slice(10, 19)
console.log(task214)

let task215 =  taskArray.slice(-17, -8)
console.log(task215)

let task216 =  taskArray.slice(1)
console.log(task216)

let task217 =  taskArray.slice(0, 26)
console.log(task217)

let task218 =  taskArray.slice(5)
console.log(task218)

let task219 =  taskArray.slice(0, 22)
console.log(task219)

let task220 =  taskArray.slice(0, arrayMiddle1)
console.log(task220)

let task221 =  taskArray.slice(-arrayMiddle1)
console.log(task221)

let task222 =  taskArray.slice(1, -1)
console.log(task222)

let task223 =  taskArray.slice(5, -3)
console.log(task223)

let task224 =  taskArray.slice(1, -8)
console.log(task224)

let task225 =  taskArray.slice(7, -1)
console.log(task225)

let task226 =  taskArray.slice(9, -12)
console.log(task226)

let task227 =  taskArray.slice(11, 20)
console.log(task227)

let task228 =  taskArray.slice(8, 20)
console.log(task228)

let task2291 =  taskArray.slice(0, 5)
let task2292 =  taskArray.slice(-6)
let task2293 = task2291.concat(task2292)
console.log(task2293)

let task2301 =  taskArray.slice(2, 5)
let task2302 =  taskArray.slice(14, 17)
// let task2303 = task2301.concat(task2302)
// let task2303 = [task2301, task2302].flat()
let task2303 = [...task2301, ...task2302]
console.log(task2303)

console.groupEnd()




