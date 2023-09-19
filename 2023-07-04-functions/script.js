function skirtukas(){
    console.log('///////////////////////////////////////////////////////////////////')
}

// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('P: ' + (10 + 10) * 2 + 'cm.')
// console.log('P: ' + (10 + 25) * 2 + 'cm.')
// console.log('P: ' + (10 + 30) * 2 + 'cm.')
// console.log('P: ' + (10 + 35) * 2 + 'cm.')
// console.log('P: ' + (10 + 40) * 2 + 'cm.')
// console.log('P: ' + (10 + 45) * 2 + 'cm.')
// console.log('P: ' + (10 + 50) * 2 + 'cm.')
// console.log('P: ' + (10 + 55) * 2 + 'cm.')
// console.log('P: ' + (10 + 60) * 2 + 'cm.')
// console.log('P: ' + (10 + 120) * 2 + 'cm.')

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelio (function).
// 2. Pavadinimo.
// 3. Paprasti skliaustai () - funkcijos argumentams.
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas.

function hello(){
    return 'Hello, Steve!'
}

// Funkcijos iškvietimas
// 1. Funkcijos pavadinimą
// 2. Paprasti skliaustai ()

console.log(hello())
document.querySelector('h1').textContent = hello()
let helloSteve = hello() + '!!!'
console.log(helloSteve)

function helloWithName(firstName , lastName){
    if (lastName){
        return 'Hello, ' + firstName + ' ' + lastName + '!'
    } else {
        return 'Hello, ' + firstName + '!'
    }
}

console.log(helloWithName('John'))
console.log(helloWithName('Steve'))
console.log(helloWithName('Steve' , 'Doe'))

skirtukas()

function perimeter(ilgis, plotis, vnt = 'vnt'){
    if (ilgis && plotis){
        let answer = (ilgis + plotis) * 2
        let output = 'Perimetras: ' + answer + vnt + '.'
        console.log(output)
    } else {
        console.log('Nurodyti duomenys neteisingi.')
    }
}

perimeter(10, 10, 'cm')
perimeter(10, 25, 'm')
perimeter(10, 30, 'km')
perimeter(10, 40)
perimeter(10)

skirtukas()

// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function areaRectangle(length, width, units = 'vnt'){
    let output = ''
    
    if (length > 0 && width > 0){
        let answer = (length * width)
        // let output = 'S = ' + answer + ' kv. ' + units + '.'
        output = `Stačiakampio plotas yra ${answer} kv. ${units}.`
    } else {
        output = 'Nurodyti duomenys neteisingi.'
    }

    return output
}

areaRectangle(5, 5, 'm')
areaRectangle(5, 5)

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function areaTriangle(base, hight, units = 'vnt'){
    let output = ''
    
    if (base > 0 && hight > 0){
        let answer = ((base * hight) / 2)
        output = `Stačiojo trikampio plotas yra ${answer} kv. ${units}.`
    } else {
        output = 'Nurodyti duomenys neteisingi.'
    }

    return output
    
}

areaTriangle(10, 2, 'cm')

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

function areas(length, width, units = 'vnt'){
    let rectangleOutput = areaRectangle(length, width, units)
    let triangleOutput = areaTriangle(length, width, units)
    let output = rectangleOutput + ' ' + triangleOutput
    return output
}

console.log(areas(2, 3, 'm'))



let num = 5
console.log(num)

function localFunc(globalNum){
    let num = 6
    console.log(num)
    console.log(globalNum)
}

localFunc(num)

console.log(num)










