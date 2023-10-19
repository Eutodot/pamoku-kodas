// let numsArr0 = [1, 2, 3, 4]

// function renderNumber(nums){
//     let ulElement = document.createElement('ul')
//     let contentElement = document.querySelector('#content')
//     contentElement.append(ulElement)
//     nums.forEach(nums => {
//         let liElement = document.createElement('li')
//         liElement.textContent = nums
//         ulElement.append(liElement)
//     })
    
// }

// renderNumber(numsArr)



let numsArr = [1, 2, 3, 4, 5, 6, 20, 7, 8, 9, 10]


function averageNum(nums, title){
    let output = ''
    let averageNum = 0
    
    for (let i = 0; i < nums.length; i++){
        averageNum += nums[i]
    }
    
    let finalAverageNum = averageNum / nums.length
    
    
    output = `Skaičių (${nums}) vidurkis yra ${finalAverageNum}.`

    renderAnswerElements(title, output)
}

function medianNum(originalNums, title){
    let output = ''
    let medianNum = ''
    let nums = originalNums.toSorted((a, b) => a - b)
    
    if (nums.length % 2 == 0){
        medianNum = (nums[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2
    } else if (nums.length % 2 != 0) {
        medianNum = nums[Math.floor(nums.length / 2)]
    }
    
    output = `Skaičių (${nums}) mediana yra ${medianNum}.`
    
    renderAnswerElements(title, output)
}

function largestNum(nums,title){
    let output = ''
    
    let largestNum = Math.max(...nums)
    
    output = `Iš skaičių (${nums}) didžiausias skaičius yra ${largestNum}.`

    renderAnswerElements(title, output)
}

function smallestNum(nums,title){
    let output = ''

    let smallestNum = Math.min(...nums)
    
    output = `Iš skaičių (${nums}) mažiausias skaičius yra ${smallestNum}.`

    renderAnswerElements(title, output)
}

function largestNumOf(nums, nNum, title){
    let output = ''
    
    if (nNum == 0){
        output = `Klaida: Pasirinktas skaičius yra nulis (${nNum}). Masyvas neturi nulinio nario!`
    } else if (isNaN(nNum)) {
        output = `Klaida: Pasirinktas skaičius privalo būti skaičius!`
    } else if (!Number.isInteger(nNum)){
        output = `Klaida: Pasirinktas skaičius privalo būti sveikasis skaičius!`
    } else if (nNum <= nums.length &&  nNum > 0){
        let largestNumOf = nums.slice(nNum - 1, nNum)
        
        output = `Iš skaičių (${nums}) ${nNum} skaičius pagal dydį yra ${largestNumOf}.`
    } else if (nNum < 0 && nNum >= -nums.length){
        let fixedNum = Math.abs(nNum)
        let reversedNums = nums.reverse()
        let largestNumOf = reversedNums.slice(fixedNum - 1, fixedNum)
        let unReversedNums = nums.reverse()

        output = `Iš skaičių (${unReversedNums}) ${nNum} skaičius pagal dydį yra ${largestNumOf}.`
    } else {
        output = `Klaida: Pasirinktas skaičius yra perdidelis arba permažas (${nNum}). Jis turi būti nedidesnis nei (${nums.length}) arba nemažesnis nei (${-nums.length})!`
    }

    renderAnswerElements(title, output)
}

function renderAnswerElements(title, output){

    let divElement = document.createElement('div')
    let h2Element = document.createElement('h2')
    h2Element.textContent = title
    let paragraphElement = document.createElement('p')
    divElement.append(h2Element, paragraphElement)
    let contentElement = document.querySelector('#content')
    contentElement.append(divElement)

    paragraphElement.textContent = output

}


averageNum(numsArr, 'Task 1')

medianNum(numsArr, 'Task 2')

largestNum(numsArr, 'Task 3')

smallestNum(numsArr, 'Task 4')

largestNumOf(numsArr, 3, 'Task 5') 







let unfilteredArr1 = [2, 5, 4, 8, 5, 4]
let filterArr1 = [5, 4]


function filteredArr1(items, filter){
    let filteredArr1 = []
    items.forEach(function(item){
        filter.forEach((filterItem) => {
            if (filterItem == item){
                filteredArr1.push(item)
            }
        })
        // let itemFilteredArr = items.filter(f => f == item)
        // filteredArr = filteredArr.concat(itemFilteredArr)
    })
    console.log(filteredArr1)
}

filteredArr1(unfilteredArr1, filterArr1)




let unfilteredArr2 = [2, 5, 7, 8, 5, 4]
let filterArr2 = [2, 4]

function checkIfItemExists(filter,item){
    for (let i = 0; i < filter.length; i++){
        if (item % filter[i] == 0){
                return true
        }
    }
    return false
}

function filteredArr2(items, filter, decider){
    let filteredArr2 = []
    if (!decider){
        items.forEach(function(item){

            let itemFound = checkIfItemExists(filter,item)

            if (itemFound){
                filteredArr2.push(item)
            }
        })
    } else {
        items.forEach(function(item){
            let counter = 0
            filter.forEach((filterItem) => {
                if (item % filterItem == 0){
                    counter++
                }
            })
            if (counter == filter.length){
                filteredArr2.push(item)
            }
        })
    }
    console.log(filteredArr2)
}

filteredArr2(unfilteredArr2, filterArr2, true)

// let unfilteredArr3 = [2, 5, 7, 8, 5, 4]

// function filteredArr3(){
//     for (let i = 0; i < unfilteredArr3.length; i++){
//         if (unfilteredArr3[i] == 7){
//             continue
//         }
//         console.log(unfilteredArr3[i])
//     }
// }

// filteredArr3()

let taskNumbersArr = [1, 'vienas', 2, 'du', 3, 'trys']
let newItem = 4

console.log(taskNumbersArr)

function task1(arr, newItem){
    let newArr = [...arr]
    newArr[arr.length] = newItem
    
    return newArr
}

console.log(task1(taskNumbersArr, newItem))



function task2(arr, newItem, place = 0){
    let tempArr = []
    for (let i = arr.length - 1; i >= 0; i--){
        tempArr[i] = arr[i]

        for (let i = arr.length - 1; i >= place; i--){
            tempArr[i + 1] = arr[i]
        }
    }
    tempArr[place] = newItem
    arr = [...tempArr]
    return arr
}

console.log(task2(taskNumbersArr, newItem, 3))







let arrOfArrays = [1, [2], [3, [[4]]],[5,6]]

console.log(arrOfArrays)
function flatArrays(arr, previousArr){
    let flatArr = previousArr ? previousArr : []

    arr.forEach(item => {
        if (Array.isArray(item)){
            flatArrays(item, flatArr)
        } else {
            console.log(item)
            flatArr.push(item)
            // console.log('ooo')
        }
    })

    return flatArr
}

console.log(flatArrays(arrOfArrays))
// TODO: patikrinti del veikimo
let unsortedArr = [[5, 1, 15], [3, 5, 1], [5, 100, 1]]

function sortingArrays(unsortedArr){
    let fixedArr1 = unsortedArr.flat()
    let fixedArr2 = []
    console.log(fixedArr1)
    for (let i = 0; i < fixedArr1.length; i++){
        
        let hasDuplicate = true
        if (i == 0){
            fixedArr2.push(fixedArr1[i])
        }
        for (let j = 0; j < fixedArr2.length; j++){
            console.log(fixedArr1[i])
            console.log(fixedArr2[j])
            if (fixedArr1[i] != fixedArr2[j]){
                hasDuplicate = false
                console.log(hasDuplicate)
            }
        }
        if (hasDuplicate == false){
            fixedArr2.push(fixedArr1[i])
        }
        console.log(hasDuplicate)

        console.log(fixedArr2)
    }
}

// sortingArrays(unsortedArr)
































