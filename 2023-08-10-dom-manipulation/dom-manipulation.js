// Paselektinti HTML elementą

let paragraphElement = document.querySelector('p')
paragraphElement.textContent = 'labas'
paragraphElement.innerHTML = 'labas <strong>vakaras</strong>'


// Sukurti HTML elemntą

let spanElement = document.createElement('span')
spanElement.textContent = '!'


// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraphElement.append(spanElement)

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraphElement.prepend(spanElement)

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraphElement.after(spanElement)

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraphElement.before(spanElement)


// Remove - pašalina HTML elementą
spanElement.remove()


console.log(spanElement)






























