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
const header_ts_1 = __importDefault(require("./header.ts"));
const functions_ts_1 = require("./functions.ts");
const postsWrapper = document.querySelector('#posts-wrapper');
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const header = (0, header_ts_1.default)();
        document.body.prepend(header);
        // changeNavigationStyle()
        const postsArr = yield getPosts();
        postsArr.forEach((post) => __awaiter(this, void 0, void 0, function* () {
            const singlePostWrapper = document.createElement('div');
            const postNameElement = document.createElement('a');
            const postAuthorElement = document.createElement('a');
            postNameElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(post.title);
            postNameElement.href = `post.html?postId=${post.id}`;
            postAuthorElement.textContent = `Author: ${post.user.name}`;
            postAuthorElement.href = 'user.html';
            singlePostWrapper.append(postNameElement, postAuthorElement);
            postsWrapper.append(singlePostWrapper);
        }));
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts?_expand=user');
        const postsArr = yield response.json();
        return postsArr;
    });
}
// function changeNavigationStyle(){
//     const navigationElement = document.querySelector('#navigation')
//     const sendToPosts = navigationElement.querySelector('#send-to-posts')
//     sendToPosts.style.fontWeight = "900"
// }
// async function getAuthorsName(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     const postAuthor = await response.json()
//     const postAuthorName = postAuthor.name
//     return postAuthorName
// }
init();
