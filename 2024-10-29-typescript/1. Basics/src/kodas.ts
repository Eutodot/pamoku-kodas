// const test4265 = (data) => {     // Jei noimplicityany: true, tai neveiks, nes nepriima any
const test4265 = (data: string) => {        // Jei noimplicityany: true, tai veiks
    console.log(data)
}

test4265('isbdv')

let str
str = 5
str = '5'
str.trim()