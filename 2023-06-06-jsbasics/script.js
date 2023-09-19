console.groupCollapsed('basics')

function skirtukas(){
    console.log('///////////////////////////////////////////////////////////////////')
}

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo reikšmė

var vardas = "John" //string
let pavarde = 'Doe' //string
const asmensKodas = 37878787878 //number
let amzius = 25
let gyvenamasisMiestas = `Kaunas`
let yraStudentas = true //boolean (true or false)


console.log(vardas)
console.log(pavarde)
console.log(asmensKodas)

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + gyvenamasisMiestas + '.')

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${gyvenamasisMiestas}.`)

skirtukas()

// math operators

let num1 = 22
let num2 = 10
let num3 = `10`

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(num1 + num3)
console.log(num1 - num3)
console.log(num1 * num3)
console.log(num1 / num3)
console.log(num1 % num3)

console.log(num1 + num3 * num3)
console.log((num1 + num3) * num3)

skirtukas()

// salygos

// Dviguba lygybė (loosely Equal ==): tikrina tik reikšmes. Ir nekreipia dėmesio į duomenų tipą.

console.log(10 == 10) //true                    
console.log(`10` == `10`) //true
console.log(`labas` == `labas`) //true
console.log(`10` == 10) //true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina duomenų tipą ir tik jeigu duomenų tipas sutampa, tada tikrina jų reikšmes.

console.log(10 === 10) //true
console.log(`10` === `10`) //true
console.log(`labas` === `labas`) //true
console.log(`10` === 10) //false

console.log(10 > 10) //false
console.log(10 >= 10) //true
console.log(10 < 10) //false
console.log(10 <= 10) //true

console.log(10 == 10) //true
console.log(10 === 10) //true
console.log(10 != 10) //false
console.log(10 !== 10) //false
console.log(10 != '10') //false
console.log(10 !== '10') //true

console.log(true)
console.log(!true)
console.log(!!true)

skirtukas()

// IF, ELSE IF, ELSE

function light(color){
    let output = ''
    let light = color.toLowerCase()
    if (light == 'green'){
        output = 'galima eiti'
    } else if (light == 'yellow'){
        output = 'pasiruosk'
    } else if (light == 'red'){
        output = 'stop'
    } else {
        output = 'sugedo'
    }
    return output
}

console.log(light('green'))
console.groupEnd()
skirtukas()

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

let password =  '1234567812345678#'
let trimedPassword = password.trim()
let passLength = trimedPassword.length
console.log(passLength)
console.log(password.includes('#'))

if (!password.includes('#')){
    console.log('Slaptažodis privalo turėti #')
} else if (passLength < 16){
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passLength > 20){
    console.log('Slaptažodis tinkamas.')
} else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
}


if (!password.includes('#')){
    console.log('Slaptažodis privalo turėti #')
} else {
    if (passLength < 16){
        console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
    } else {
        if (passLength > 20){
            console.log('Slaptažodis tinkamas.')
        } else {
            console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
        } 
    }    
}

skirtukas()

// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// let age = 10

// if (age <= 0){
    //     console.log('Įvestas amžius yra per mažas.')
    // } else {
        //     if (age <= 6){
            //     console.log('Mokinys į mokyklą neeina.')
            //     } else {
                //         if (age <= 10){
                    //             console.log('Mokinys eina į pradinę klasę.')
                    //         } else {
                        //             if (age <= 14){
                            //                 console.log('Mokinys eina į pagrindinę.')
                            //             } else {
                                //                 if (age <= 18){
                                    //                     console.log('Mokinys eina į gimnaziją.')
                                    //                 } else {
                                        //                     if (age <= 120){
                                            //                     console.log('Mokinys mokyklą baigė.')
//                     } else {
    //                         console.log('Įvestas amžius yra per didelis.')
    //                         }
    
    //                 }
    //             }
    //         }
    //     }
    // }
    
    // 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
    // 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.
    // 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
    // 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
    // 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
    // 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
    
    let age1 = 10
    // let age1 = prompt('Įveskite amžių')
    
    if (isNaN(age1)){
        console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
    } else if (age1 < 0){
        console.log('Įvestas amžius yra per mažas.')
    } else if (age1 < 6){
        console.log('Mokinys į mokyklą neeina.')
    } else if (age1 < 7){
        console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
    } else if (age1 < 10){
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age1 < 11){
    console.log('Mokinys eina į pradinę klasę.')
} else if (age1 < 14){
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age1 < 15){
    console.log('Mokinys eina į pagrindinę.')
} else if (age1 < 18){
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age1 < 19){
    console.log('Mokinys eina į gimnaziją.')
} else if (age1 < 121){
    console.log('Mokinys mokyklą baigė.')
} else {
    console.log('Įvestas amžius yra per didelis.')
}


// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

skirtukas()

// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

let correctAnswer11 = 1
let correctAnswer12 = 1

let playerAnswer11 = 1
let playerAnswer12 = 1

if (correctAnswer11 == playerAnswer11 && correctAnswer12 == playerAnswer12){
    console.log('Sveikiname, abu atsakymai teisingi, patekote į kitą lygį.')
} else if (correctAnswer11 == playerAnswer11){
    console.log('Antras atsakymas buvo neteisingas, o pirmas buvo teisingas, patekote į kitą lygį.')
} else if (correctAnswer12 == playerAnswer12){
    console.log('Pirmas atsakymas buvo neteisingas, o antras buvo teisingas, patekote į kitą lygį.')
} else {
    console.log('Abu atsakymai buvo neteisingi, nepatekote į kitą lygį.')
}


// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

skirtukas()

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

let correctAnswer21 = 1
let correctAnswer22 = 1

let playerAnswer21 = 1
let playerAnswer22 = 1

if (correctAnswer21 == playerAnswer21 && correctAnswer22 == playerAnswer22){
    console.log('Sveikiname, abu atsakymai teisingi, patekote į kitą lygį.')
} else if (correctAnswer21 == playerAnswer21){
    console.log('Antras atsakymas buvo neteisingas, o pirmas buvo teisingas, nepatekote į kitą lygį.')
} else if (correctAnswer22 == playerAnswer22){
    console.log('Pirmas atsakymas buvo neteisingas, o antras buvo teisingas, nepatekote į kitą lygį.')
} else {
    console.log('Abu atsakymai buvo neteisingi, nepatekote į kitą lygį.')
}

skirtukas()

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

let playerAnswer31 = 1
let playerAnswer32 = 1
let playerAnswer33 = 1
let output3 = ''
let answer31 = correctAnswer31 == playerAnswer31
let answer32 = correctAnswer32 == playerAnswer32
let answer33 = correctAnswer33 == playerAnswer33


if (answer31 && answer32 && answer33){
    output3 = 'Sveikiname, visi atsakymai teisingi, patekote į kitą lygį.'
} else if (answer31 && answer32){
    output3 = 'Sveikiname, pirmas ir antras atsakymai teisingi, patekote į kitą lygį.'
} else if (answer32 && answer33){
    output3 = 'Sveikiname, antras ir trečias atsakymai teisingi, patekote į kitą lygį.'
} else if (answer31 && answer33){
    output3 = 'Sveikiname, pirmas ir trečias atsakymai teisingi, patekote į kitą lygį.'
} else if (answer31){
    output3 = 'Pirmas atsakymas teisingas, bet antras ir trečias neteisingi, nepatekote į kitą lygį'
} else if (answer32){
    output3 = 'Antras atsakymas teisingas, bet pirmas ir trečias neteisingi, nepatekote į kitą lygį'
} else if (answer33){
    output3 = 'Trečias atsakymas teisingas, bet pirmas ir antras neteisingi, nepatekote į kitą lygį'
} else {
    output3 = 'Visi atsakymai neteisingi, nepatekote į kitą lygį'
}

console.log(output3)

skirtukas()

// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// let isLoggedIn = true;
// let userName = 'John';
// let time = 23;
// let isBirthday = true;

// if (time < 5 && isLoggedIn && isBirthday){
//     console.log('Good Evening, ' + userName + ' and have a great birthday!')
// } else if (time < 13 && isLoggedIn && isBirthday){
//     console.log('Good Morning, ' + userName + ' and have a great birthday!')
// } else if (time < 19 && isLoggedIn && isBirthday){
//     console.log('Good Afternoon, ' + userName + ' and have a great birthday!')
// } else if (time < 24 && isLoggedIn && isBirthday){
//     console.log('Good Evening, ' + userName + ' and have a great birthday!')
// } else if (time < 5 && isLoggedIn && !isBirthday){
//     console.log('Good Evening, ' + userName + '!')
// } else if (time < 13 && isLoggedIn && !isBirthday){
//     console.log('Good Morning, ' + userName + '!')
// } else if (time < 19 && isLoggedIn && !isBirthday){
//     console.log('Good Afternoon, ' + userName + '!')
// } else if (time < 24 && isLoggedIn && !isBirthday){
//     console.log('Good Evening, ' + userName + '!')
// } else if (time < 5 && !isLoggedIn && isBirthday){
//     console.log('Good Evening, and have a great birthday!')
// } else if (time < 13 && !isLoggedIn && isBirthday){
//     console.log('Good Morning, and have a great birthday!')
// } else if (time < 19 && !isLoggedIn && isBirthday){
//     console.log('Good Afternoon, and have a great birthday!')
// } else if (time < 24 && !isLoggedIn && isBirthday){
//     console.log('Good Evening, and have a great birthday!')
// } else if (((time < 5 && time >= 0 ) || (time >=19 && time <24)) && !isLoggedIn && !isBirthday){
//     console.log('Good Evening!')
// } else if (time < 13 && !isLoggedIn && !isBirthday){
//     console.log('Good Morning!')
// } else if (time < 19 && !isLoggedIn && !isBirthday){
//     console.log('Good Afternoon!')
// }



let isLoggedIn = true;
let userName = 'John';
let time = 4;
let isBirthday = true;

let greetingText = ''
let birthdayText = (isBirthday && isLoggedIn) ? ' and have a great birthday!' : ''
let nameText = (isLoggedIn && userName) ? ', ' + userName : ''

if ((time < 5 && time >= 0 ) || (time >=19 && time <24)){
    greetingText = 'Good Evening'
} else if (time >= 5 && time < 13){
    greetingText = 'Good Morning'
} else if (time >= 13 && time <19){
    greetingText = 'Good Afternoon'
} else {
    greetingText = 'Hello'
}

// if (isLoggedIn && userName){
//     nameText = ', ' + userName
// }

// if (isBirthday && isLoggedIn){
//     birthdayText = ' and have a great birthday!'
// }

console.log(greetingText + nameText + birthdayText)

skirtukas()

// SWITCH
let grade = 9
switch (grade){
    case 1:
        console.log('Labai blogai')
        break
    case 2:
        console.log('Blogai')
        break
    case 3:
        console.log('Vidutiniskai')
        break
    case 4:
        console.log('Gerai')
        break
    case 5:
        console.log('Puikiai')
        break
    default:
        console.log('Blogai ivestas skaicius')
}

skirtukas()

// APRAŠYMAS:
// Sukurti aprašymą apie asmenį pagal pateiktus kintamuosius ir punktus:
// 1. Jeigu asmuo yra vyras, tai naudoti žodžius he/his, jeigu moteris, tai naudoti žodžius she/her.
// 2. Jeigu nenurodyta asmens pavardė arba vardas, tai tekste turėtų būti naudojami tik nurodyti duomenys. Jeigu nenurodytas nei vardas, nei pavardė, tada tekste reikėtų naudoti žodį person.
// 3. Jeigu asmuo yra pilnametis, tai tekste turi būti įvardintas jo darbas (personJob kintamasis).
// 3.1. Jeigu personJob kintamasis neturi reikšmės, tai tekste reikėtų įvardinti jog asmuo yra bedarbis.
// 3.2. Jeigu asmuo yra nepilnametis, tai tekste panaudoti personJob kintamąjį nurodant kuo asmuo norėtų būti užaugęs.
// 3.3. Jeigu asmuo yra nepilnametis ir kintamasis personJob neturi reikšmės, tai tekste įvardinti jog asmuo dar neturi planų kuo bus užaugęs.

let gender = 'male'
let firstName = 'John'
let lastName = 'Doe'
let age = 5
let personJob = ''

let person = ''
let pronoun1= ''
let pronoun2 = ''
let job = ''

// if (!firstName && !lastName){
//     person = 'Person'
// } else if (!firstName){
//     person = lastName
// } else if (!lastName){
//     person = firstName
// } else {
//     person = firstName + ' ' + lastName
// }

if (firstName && lastName){
    person = firstName + ' ' + lastName
} else if (firstName){
    person = firstName
} else if (lastName){
    person = lastName
} else {
    person = 'Person'
}


if (gender == 'male'){
    pronoun1 = 'He'
    pronoun2 = 'his'
} else {
    pronoun1 = 'She'
    pronoun2 = 'her'
}


if ((age >= 6 && age < 18) && !personJob){
    job = pronoun1 + ' is still in school and doesn`t have plans for ' + pronoun2 + ' future job.'
} else if (age >= 6 && age < 18){
    job = pronoun1 + ' is still in school and ' + pronoun2 + ' dream is to become a ' + personJob + '.'
} else if ((age >= 18 && age < 120) && !personJob){
    job = pronoun1 + ' is unemployed.'
} else if (age >= 18 && age < 120){
    job = pronoun1 + ' is a ' + personJob + '.'
}

console.log(person + ' is ' + age + ' years old. ' + job)



















