"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const header_ts_1 = __importDefault(require("./header.ts"));
function init() {
    const header = (0, header_ts_1.default)();
    document.body.prepend(header);
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
init();
