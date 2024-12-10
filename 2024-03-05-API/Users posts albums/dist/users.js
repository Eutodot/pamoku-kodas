"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_ts_1 = require("./functions.ts");
const header_ts_1 = __importDefault(require("./header.ts"));
const usersWrapper = document.querySelector('#users-wrapper');
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const header = (0, header_ts_1.default)();
        document.body.prepend(header);
        // changeNavigationStyle()
        const usersArr = yield (0, functions_ts_1.getUsers)();
        usersArr.forEach((user) => __awaiter(this, void 0, void 0, function* () {
            const singleUserWrapper = document.createElement('div');
            const userElement = document.createElement('a');
            const postsAmount = user.posts.length;
            userElement.textContent = `${user.name}, posts made: ${postsAmount}`;
            userElement.href = `user.html?userId=${user.id}`;
            singleUserWrapper.append(userElement);
            usersWrapper.append(singleUserWrapper);
        }));
    });
}
// function changeNavigationStyle(){
//     const navigationElement = document.querySelector('#navigation')
//     const sendToUsers = navigationElement.querySelector('#send-to-users')
//     sendToUsers.style.fontWeight = "900"
// }
// async function getUsersPosts(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     const userPostsArr = await response.json()
//     const postsAmount = userPostsArr.length
//     return postsAmount
// }
init();
