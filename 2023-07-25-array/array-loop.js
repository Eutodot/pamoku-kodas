console.groupCollapsed('basics')

let citiesArr = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Marijampolė', 'Alytus'];

// FOR ciklas dirbant su masyvais

for (let i = 0; i < citiesArr.length; i++){
    console.log('for: ' + citiesArr[i])
}

citiesArr.forEach(function(city, index, arr){
    console.log(index)
    // console.log(arr)
    console.log('for each: ' + city)
})

citiesArr.forEach((city) => {
    console.log(city)
})

citiesArr.forEach(city => {
    console.log(city)
})

citiesArr.map(function(city, index, arr){
    console.log(index)
    // console.log(arr)
    console.log('map: ' + city)
})

let nums = [1, 2, 3, 4, 5, 6, 0]

// let multipliedNums = nums.forEach(num => {
//     return num * 2
// })

// let multipliedNums = nums.map(num => {
//     return num * 2
// })

let multipliedNums = nums.map(num => num * 2).reverse()

console.log(multipliedNums)



let filteredNum = nums.filter(function(num){
    return num > 2 && num < 6
})

console.log(filteredNum)

nums.reduce(function(sum, currentNum, index, arr){
    console.log(index)
    console.log('sum', sum)
    console.log('currentNum', currentNum)
    return sum + currentNum
}, 10)

console.groupEnd()












console.groupCollapsed('Big task 4')

taskArr1 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

for (let i = 0; i < taskArr1.length; i++){
    if (typeof taskArr1[i] === 'number'){
        // console.log(taskArr1[i])
        // console.log(taskArr1[i] * taskArr1[i] * taskArr1[i] * taskArr1[i])
        // console.log(taskArr1[i] + 55)
        // console.log(taskArr1[i] / 2)
        // console.log('Number: ' + taskArr1[i])
        // console.log('Index: ' + i + ', Number: ' + taskArr1[i])
        // console.log(taskArr1[i] * i)
        // console.log(taskArr1[0])
        // if (i != 0){
        //     console.log(taskArr1[i] * taskArr1[i - 1])
        // }
        // if (taskArr1[i] * 5 > 350){
        //     console.log(taskArr1[i])
        // }
    }
}
let filteredNums = []
// taskArr1.map(function(i, index){
//     if (typeof i === 'number'){
//         filteredNums.push(i)
//     }
// })
let filteredNums2 =taskArr1.filter(function(num){
    return typeof num === 'number'
})
console.log(filteredNums2)
taskArr1.map(function(i, index){
    if (typeof i === 'number'){
        // console.log(i)
        // console.log(i * i * i * i)
        // console.log(i**4)
        // console.log(Math.pow(i, 4))
        // console.log(i + 55)
        // console.log(i / 2)
        // console.log('Number: ' + i)
        // console.log('Index: ' + index + ', Number: ' + i)
        // console.log(i * index)
        // if (filteredNums.length > 0){
        //     console.log(i * filteredNums.slice(-1))
        // }
        // filteredNums.push(i)
        // if (i * 5 > 350){
        //     console.log(i)
        // }
    } 
})


let filteredStrings =taskArr1.filter(function(item){
    return typeof item === 'string'
})

for (let i = 0; i < taskArr1.length; i++){
    if (typeof taskArr1[i] === 'string'){
        // console.log(taskArr1[i])
        // console.log(`${taskArr1[i]} has ${taskArr1[i].length} symbols`)
        // console.log(taskArr1[i].reverse)
    } 
}

filteredStrings.map(function(string){
    fixedString = string.toUpperCase()
    separatedString = fixedString.split('')
    joinedString = separatedString.join('-')
    console.log(joinedString)
})

filteredStrings.map(function(string){
    separatedString = string.split('')
    separatedString.splice(0, 1, '_')
    separatedString.splice(2, 1, '_')
    joinedString = separatedString.join('')
    console.log(joinedString)
})

filteredStrings.map(function(string){
    separatedString = string.split('')
    reversedString = separatedString.reverse()
    joinedString = separatedString.join('')
    console.log(joinedString)
})

taskArr1.map(function(item, index){
    if (typeof item === 'string'){
        if (index == 0){
            console.log(`Word ${item} is behind ${taskArr1[index + 1]} in the array.`)            
        } else if (index == taskArr1.length - 1){
            console.log(`Word ${item} is after ${taskArr1[index - 1]} in the array.`)
        } else {
            console.log(`Word ${item} is between ${taskArr1[index - 1]} and ${taskArr1[index + 1]} in the array.`)
        }
        // console.log(`Word ${item} is between ${taskArr1[index - 1]} and ${taskArr1[index + 1]} in the array.`)
    } 
})

console.groupEnd()



console.groupCollapsed('Big task 3')

taskArr1 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']



let task31 = taskArr1.filter(function(item){
    return item > 0
})
console.log(task31)


let task32 = taskArr1.filter(function(item){
    return item < 0
})
console.log(task32)


let task33 = taskArr1.filter(function(item){
    return item % 2 == 0
})
console.log(task33)


let task34 = taskArr1.filter(function(item){
    return item % 3 == 0
})
console.log(task34)


let task38 = taskArr1.filter(function(item){
    return item % 2 == 0 && item % 3 == 0
})
console.log(task38)


let task314 = taskArr1.filter(function(item){
    return item % 3 == 0 || item % 5 == 0
})
console.log(task314)


let task323 = taskArr1.filter(function(item){
    return item > 555
})
console.log(task323)


let task325 = taskArr1.filter(function(item){
return item >= 6789
})
console.log(task325)


let task326 = taskArr1.filter(function(item){
    return item < 50
})
console.log(task326)


let task328 = taskArr1.filter(function(item){
    return item <= -1
})
console.log(task328)


let task330 = taskArr1.filter(function(item){
    return item < 1000 && item > 500
})
console.log(task330)


let task336 = taskArr1.filter(function(item){
    return item > 0 && item % 2 == 0
})
console.log(task336)


let task339 = taskArr1.filter(function(item){
    return item < 0 && item % 111 == 0
})
console.log(task339)


let task348 = taskArr1.filter(function(item){
    return item > 100 && item < 500 && item % 5 == 0
})
console.log(task348)


let task350 = taskArr1.filter(function(item){
    return item <= 888 && item >= -333 && item % 3 == 0 && item != 0
})
console.log(task350)

let task351 = taskArr1.filter(function(item){
    return typeof item === 'number'
})
console.log(task351)




let task352 = taskArr1.filter(function(item){
    return typeof item === 'string'
})
console.log(task352)


let task353 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.length <= 5
})
console.log(task353)


let task356 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.includes('t')
})
console.log(task356)


let task358 = taskArr1.filter(function(item){
    return typeof item === 'string' && (item.includes('e') || item.includes('a'))
})
console.log(task358)


let task360 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.includes('t') && !item.includes('k')
})
console.log(task360)


let task362 = taskArr1.filter(function(item){
    if (typeof item === 'string'){
        // let letterCount = 0
        // for (let i = 0; i < item.length; i++){
        //     if (item[i] == 't'){
        //         letterCount++
        //         if (letterCount > 1){
        //             return true
        //         }
        //     }
        // }
        let splitArr = item.split('t')
            return splitArr.length > 2
    }
})
console.log(task362)


let task364 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.includes('nd')
})
console.log(task364)


let task366 = taskArr1.filter(function(item){
    return typeof item === 'string' && !item.includes('t')
})
console.log(task366)


let task368 = taskArr1.filter(function(item){
    let correctItem = ''
    if (typeof item === 'string'){
        separatedString = item.split('')
        if (separatedString[0] <= 0 || separatedString[0] >= 0){
            correctItem = item
        }
    }
    return correctItem
})
console.log(task368)


let task370 = taskArr1.filter(function(item){
    let correctItem = ''
    if (typeof item === 'string'){
        separatedString = item.split('')
        if (separatedString[0] == 'o'){
            correctItem = item
        }
    }
    return correctItem
})
console.log(task370)

let task372 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.length > 4 && item.includes('o')
})
console.log(task372)


let task375 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.length % 2 == 0
})
console.log(task375)

let task376 = taskArr1.filter(function(item){
    return typeof item === 'string' && item.length % 2 != 0 && item.includes('s')
})
console.log(task376)


let task377 = taskArr1.filter(function(item){
    return typeof item === 'string' && item[2] == 'a'
})
console.log(task377)


let task379 = taskArr1.filter(function(item){
    let correctItem = ''
    if (typeof item === 'string' && item.length > 4){
        separatedString = item.split('')
        if (separatedString[4] != 't'){
            correctItem = item
        }
    }
    return correctItem
})
console.log(task379)


let task380 = taskArr1.filter(function(item){
    let correctItem = ''
    if (typeof item === 'string' && item.length < 6){
        separatedString = item.split('')
        if (separatedString[0] != 'e' && isNaN(separatedString[0])){
            correctItem = item
        }
    }
    return correctItem
})
console.log(task380)

console.groupEnd()














































































































































