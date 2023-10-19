export default function gameHeader(count){
    let headerElement = document.createElement('header')
    
    let titleElement = document.createElement('h1')
    titleElement.textContent = 'Math game'
    let descriptionElement = document.createElement('h2')
    descriptionElement.textContent = `Solve ${count} problems by clicking the button with the correct answer or typing one in.`
    headerElement.append(titleElement, descriptionElement)
    return headerElement
}