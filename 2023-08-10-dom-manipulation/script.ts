// let h1Element = document.querySelector('h1')
// console.dir(h1Element.textContent)
// h1Element.textContent = 'hello'

// let pElement = document.querySelector('p')
// pElement.textContent = textAreaElement.value
// console.dir(textAreaElement.value)

// button.addEventListener('click', function(){
//     let textAreaElement = document.querySelector('textarea')
    
//     let plan = textAreaElement.value
//     let fields = plan.split(' ')
//     let perimeter = calculatePerimeter(fields) * 100
//     let outputParagraph = document.querySelector('p')
//     calculateArea(fields)
//     outputParagraph.textContent = `Perimetras lygus ${perimeter} metrams, o plotas lygus ${calculateArea(plan)} m2`

// })

let button = document.querySelector('#calculate')!
button.addEventListener('click', buttonClick)

function buttonClick(){
    let textAreaElement = document.querySelector('textarea')!
    
    let plan = textAreaElement.value
    let fields = plan.split(' ')
    let perimeter = calculatePerimeter(fields) * 100
    let outputParagraph = document.querySelector('p')!
    outputParagraph.textContent = `Perimetras lygus ${perimeter} metrams, o plotas lygus ${calculateArea(plan)} m2`
}




function calculatePerimeter(fields: string[]): number{
    let perimeter = 0

    for (let i = 0; i < fields.length; i++){
    
        let row = fields[i].split('')
        
        for (let j = 0; j < fields[i].length; j++){
            if (row[j] == 'X'){

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
    
    return perimeter
}

function calculateArea(fields: string): number{
    let area = 0

    for (let i = 0; i < fields.length; i++){
        let row = fields[i].split('')
        
        for (let j = 0; j < fields[i].length; j++){
            if (row[j] == 'X'){
                area++
            }
        }
    }
    return area
}



