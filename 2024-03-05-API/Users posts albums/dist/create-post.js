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
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const header = (0, header_ts_1.default)();
        document.body.prepend(header);
        const users = yield (0, functions_ts_1.getUsers)();
        const userSelect = document.querySelector('#user');
        users.forEach(user => {
            const optionElement = document.createElement('option');
            optionElement.value = `${user.id}_${user.name}`;
            optionElement.textContent = user.name;
            userSelect.append(optionElement);
        });
        const submitButton = document.querySelector('#submit-button');
        submitButton.removeAttribute('disabled');
        const createPostForm = document.querySelector('#post-form');
        createPostForm.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            const userValue = event.target.user.value;
            const userId = userValue.split('_')[0];
            const username = userValue.split('_')[1];
            const newPost = {
                title,
                body,
                userId: Number(userId),
            };
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const createdPost = yield response.json();
            createdPost.username = username;
            createPostForm.after(createPost(createdPost));
        }));
    });
}
function createPost(info) {
    console.log(info);
    const postWrapper = document.createElement('div');
    const postTitle = document.createElement('h3');
    const postAuthor = document.createElement('a');
    const postBody = document.createElement('p');
    postTitle.textContent = `${(0, functions_ts_1.firstLetterUpperCase)(info.title)} (${info.id})`;
    postAuthor.textContent = `Author: ${info.username}`;
    postAuthor.href = `user.html?userId=${info.userId}`;
    postBody.textContent = (0, functions_ts_1.firstLetterUpperCase)(info.body);
    postWrapper.append(postTitle, postAuthor, postBody);
    return postWrapper;
}
init();