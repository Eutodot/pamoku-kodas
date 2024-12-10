import createHeader from "./header.js"




function init(){
    const header = createHeader()
    document.body.prepend(header)


    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    id: 101,
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    // changeNavigationStyle()
}

// function changeNavigationStyle(){
//     const navigationElement = document.querySelector('#navigation')
//     const sendToHome = navigationElement.querySelector('#send-to-home')
//     sendToHome.style.fontWeight = "900"

// }

init()
