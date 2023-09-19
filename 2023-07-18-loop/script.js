console.groupCollapsed('numbers')

// console.log('- ' + 1 + '!')
// console.log('- ' + 2 + '!')
// console.log('- ' + 3 + '!')
// console.log('- ' + 4 + '!')
// console.log('- ' + 5 + '!')
// console.log('- ' + 6 + '!')
// console.log('- ' + 7 + '!')
// console.log('- ' + 8 + '!')
// console.log('- ' + 9 + '!')
// console.log('- ' + 10 + '!')
// console.log('- ' + 11 + '!')
// console.log('- ' + 12 + '!')
// console.log('- ' + 13 + '!')
// console.log('- ' + 14 + '!')
// console.log('- ' + 15 + '!')
// console.log('- ' + 16 + '!')
// console.log('- ' + 17 + '!')
// console.log('- ' + 18 + '!')
// console.log('- ' + 19 + '!')
// console.log('- ' + 20 + '!')

function count(num){
    console.log('- ' + num + '!')
}

// count(1)
// count(2)
// count(3)
// count(4)
// count(5)

// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}
/* 
  for (kintamasis; sąlyga; kintamojo keitimas) {

  }
*/



let num = 5
console.log(num)
console.log(num + 1)
console.log(num)
num = 6
console.log(num)
num = num + 1
console.log(num)
num += 1
console.log(num)
num++
console.log(num)
num = num + 2
console.log(num)
num += 2
console.log(num)
num = num - 2
console.log(num)
num -= 2
console.log(num)
num -= 1
console.log(num)
num--
console.log(num)
num = num * 2
console.log(num)
num *= 2
console.log(num)
num = num / 2
console.log(num)
num /= 2
console.log(num)

let str = 'labas'
console.log(str)
console.log(str + ' vakaras')
console.log(str) 
str = str + ' vakaras'
console.log(str) 
str += '.'
console.log(str) 

console.groupEnd()
// for (let i = 1; i <= 20; i++){
//     console.log('- ' + i + '!')
// }

// for (let i = 1; i <= 20; i++){
//     count(i)
// }

for (let i = 1; i < 5; i++){
    console.log(i)
}

console.log('//////////////////////////////////////////////////')

// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.
// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.
// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

console.groupCollapsed('loops')

function loop1(start = 1, end = 100, nth = 1, multi = 2){
    if (nth <= 0){
        return
    }

    for (let i = start; i <= end; i += nth){
        let answer = i * multi
        let output = `${i} * ${multi} = ${answer}`
        console.log(output)
    }
}

function loop2(){
    for (let i = 1; i <= 100; i++){
        let answer = i * 5
        let output = `${i} * 5 = ${answer}`
        console.log(output)
    }
}

function loop3(start = 1, end = 1, nth = 2, add = 1){
    if (nth <= 0){
        return
    }

    let mathSymbol = add < 0 ? '-' : '+'
    
    for (let i = start; i <= end; i += nth){
        let answer = i + add
        let output = `${i} ${mathSymbol} ${Math.abs(add)} = ${answer}`
        console.log(output)
    }
}

function loop4(){
    for (let i = 100; i >= 0; i -= 2){
        console.log((i + 2) + ' - 2 = ' + i)
    }
}

function loop5(start = 1, end = 1, nth = 2, power = 2){
    if (nth <= 0 || power <= 0){
        return
    }
    
    for (let i = start; i <= end; i += nth){
        let answer = i ** power
        let output = `${i} ** ${power} = ${answer}`
        console.log(output)
    }
}

function loop6(start = 1, end = 100, nth = 1, add = 2){
    if (nth <= 0){
        return
    }
    
    let mathSymbol = add < 0 ? '-' : '+'

    if (start > end){
        for (let i = start; i >= end; i -= nth){
            let answer = i + add
            let output = `${i} ${mathSymbol} ${Math.abs(add)} = ${answer}`
            console.log(output)
        }
    } else if (start < end){
        for (let i = start; i <= end; i += nth){
            let answer = i + add
            let output = `${i} ${mathSymbol} ${Math.abs(add)} = ${answer}`
            console.log(output)
        }
    }
}

loop6(1, 100, 1, 2)

console.groupEnd()

// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";
// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";
// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

// let nums = 5
// if (nums % 5 == 0){
//     console.log('Dalinasi')
// } else {
//     console.log('Nesidalina')
// }

console.groupCollapsed('fizzbuzz')

function fizzBuzz(){
    for (let i = 1; i <= 100; i++){
        
        let fizz = ''
        let buzz = ''
        let biff = ''
        let fuzz = ''
        
        if (i % 3 == 0){
            fizz = 'Fizz'
        }
        if (i % 5 == 0){
            buzz = 'Buzz'
        }
        if (i % 7 == 0){
            biff = 'Biff'
        }
        if (i % 9 == 0){
            fuzz = 'Fuzz'
        }
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 9 == 0){
            console.log(fizz + buzz + biff + fuzz)
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz()

function fizzBuzz1(){
    for (let i = 1; i <= 100; i++){
        
        let output = ''
        
        if (i % 3 == 0){
            output += 'Fizz'
        }
        if (i % 5 == 0){
            output +='Buzz'
        }
        if (i % 7 == 0){
            output += 'Biff'
        }
        if (i % 9 == 0){
            output += 'Fuzz'
        }
        if (i % 11 == 0){
            output += 'Buff'
        }
        if (!output){
            output = i
        }
        
        console.log(output)
    }
}

fizzBuzz1()

console.groupEnd()









