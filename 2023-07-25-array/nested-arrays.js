let arr = [10, 20, 30, 40, 50]

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


let nestedArr = [
    [3, 2, 1], 
    [6, 5, 4], 
    [9, 8, 7]
]

// console.log(nestedArr)
// console.log(nestedArr[0])
// console.log(nestedArr[0][0])
// console.log(nestedArr[0][1])
// console.log(nestedArr[0][2])

// console.log(nestedArr[1])
// console.log(nestedArr[1][0])
// console.log(nestedArr[1][1])
// console.log(nestedArr[1][2])

// console.log(nestedArr[2])
// console.log(nestedArr[2][0])
// console.log(nestedArr[2][1])
// console.log(nestedArr[2][2])


for (let i = 0; i < nestedArr.length; i++){
    console.log(nestedArr[i])
    for (let j = 0; j < nestedArr[i].length; j++){
        console.log(nestedArr[i][j])
    }
}


// Reikia apskaičiuoti apželdinto miško dalies perimetrą. Viso miško plotas yra suskirstytas segmentais po 1 ha ploto. Šio miško informacija pateikta šiame duomenų masyve:

// const fields = ["OOOXO", "XOOXX", "XXOXX", "OXOOO", "XOOXO"];
// •	Kiekvienas X ir O simbolis žymi vieną segmentą miške.
// •	X simbolis žymi apželdintą plotą.
// •	O simbolis žymi laisvą plotą.
// •	Kiekvienas masyvo narys atspindi vieną miško segmentų eilę.
// •	Kiekvienas simbolis X ir O atspindi vieną segmentą toje eilėje.
// •	Pvz. šis miškas turi 25 ha (5x5):

const fields = ["OOOXO", "XOOXX", "XXOXX", "OXOOO", "XOOXO"]


let perimeter = 0

for (let i = 0; i < fields.length; i++){
    
    let row = fields[i].split('')
    console.log(row)
    
    for (let j = 0; j < fields[i].length; j++){
        if (row[j] == 'X'){
                console.log(row[j])     

                if (i == 0){
                   perimeter++
                }
                if (i == fields.length - 1){
                    perimeter++
                }
                if (j == 0){
                    perimeter++
                }
                if (j == row.length - 1){
                    perimeter++
                }


                if (i > 0 && fields[i - 1][j] != 'X'){
                    perimeter++
                }
                if (i < fields.length - 1 && fields[i + 1][j] != 'X'){
                    perimeter++
                }
                if (j > 0 && fields[i][j - 1] != 'X'){
                    perimeter++
                }
                if (j < row.length - 1 && fields[i][j + 1] != 'X'){
                    perimeter++
                }
        }
    }
}

console.log(perimeter)