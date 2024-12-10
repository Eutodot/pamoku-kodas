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
        const contentElement = document.querySelector('#content');
        const titleElement = document.createElement('h1');
        contentElement.append(titleElement);
        const postId = (0, functions_ts_1.getUrlParams)('postId');
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
        const postData = yield response.json();
        if (Object.keys(postData).length === 0) {
            titleElement.textContent = 'Post not found';
            const returnLink = document.createElement('a');
            returnLink.textContent = 'Return to posts page';
            returnLink.href = 'posts.html';
            titleElement.after(returnLink);
            return;
        }
        titleElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(postData.title);
        const authorElement = document.createElement('a');
        authorElement.textContent = `Author: ${postData.user.name}`;
        authorElement.href = `user.html?userId=${postData.userId}`;
        const textElement = document.createElement('p');
        textElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(postData.body);
        const editLink = document.createElement('a');
        editLink.href = `edit-post.html?postId=${postData.id}`;
        editLink.textContent = 'Edit';
        ///////////////////////////////////////////////
        const createCommentWrapper = document.createElement('div');
        createCommentWrapper.textContent = `Add a comment:`;
        const createCommentForm = document.createElement('form');
        const formControl1 = document.createElement('div');
        formControl1.classList.add('form-control');
        const commentNameInputLabel = document.createElement('label');
        commentNameInputLabel.for = 'comment-name-input';
        commentNameInputLabel.textContent = 'Title: ';
        const commentNameInput = document.createElement('input');
        commentNameInput.name = 'comment-name-input';
        commentNameInput.id = 'comment-name-input';
        formControl1.append(commentNameInputLabel, commentNameInput);
        const formControl2 = document.createElement('div');
        formControl2.classList.add('form-control');
        const commentTextInputLabel = document.createElement('label');
        commentTextInputLabel.for = 'comment-text-input';
        commentTextInputLabel.textContent = 'Text: ';
        const commentTextInput = document.createElement('textarea');
        commentTextInput.name = 'comment-text-input';
        commentTextInput.id = 'comment-text-input';
        formControl2.append(commentTextInputLabel, commentTextInput);
        const formControl3 = document.createElement('div');
        formControl3.classList.add('form-control');
        const commentAuthorInputLabel = document.createElement('label');
        commentAuthorInputLabel.for = 'comment-author-input';
        commentAuthorInputLabel.textContent = 'Email: ';
        const commentAuthorInput = document.createElement('input');
        commentAuthorInput.type = 'email';
        commentAuthorInput.name = 'comment-author-input';
        commentAuthorInput.id = 'comment-author-input';
        formControl3.append(commentAuthorInputLabel, commentAuthorInput);
        const addCommentButton = document.createElement('button');
        addCommentButton.type = 'submit';
        addCommentButton.textContent = 'Comment';
        createCommentForm.append(formControl1, formControl2, formControl3, addCommentButton);
        createCommentWrapper.append(createCommentForm);
        const postCommentsWrapper = document.createElement('div');
        postCommentsWrapper.textContent = `Comments:`;
        const postCommentsList = document.createElement('ul');
        postData.comments.forEach(comment => {
            postCommentsList.append(createCommentElement(comment.id, comment.name, comment.body, comment.email, createCommentForm));
        });
        postCommentsWrapper.append(postCommentsList);
        const returnToPostsElement = document.createElement('a');
        returnToPostsElement.textContent = `More ${postData.user.name} posts`;
        returnToPostsElement.href = 'posts.html';
        titleElement.after(authorElement, textElement, editLink, createCommentWrapper, postCommentsWrapper);
        //////////////////////////////////////////////
        // console.log(postData.comments)
        createCommentForm.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const newComment = {
                postId: postData.id,
                name: commentNameInput.value,
                body: commentTextInput.value,
                email: commentAuthorInput.value,
            };
            const response = yield fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const createdComment = yield response.json();
            postCommentsList.prepend(createCommentElement(createdComment.id, createdComment.name, createdComment.body, createdComment.email, createCommentForm));
        }));
    });
}
function createCommentElement(id, name, body, email, form) {
    const liElement = document.createElement('li');
    const commentNameElement = document.createElement('h3');
    commentNameElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(name);
    const commentTextElement = document.createElement('p');
    commentTextElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(body);
    const commentAuthorElement = document.createElement('p');
    commentAuthorElement.textContent = `Authors email: ${email}`;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    liElement.append(commentNameElement, commentTextElement, commentAuthorElement, editButton);
    editButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
        form['comment-name-input'].value = name;
        form['comment-text-input'].value = body;
        form['comment-author-input'].value = email;
        const newComment = {
            postId: postData.id,
            name: commentNameInput.value,
            body: commentTextInput.value,
            email: commentAuthorInput.value,
        };
        const response = yield fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const editedComment = yield response.json();
        console.log(editedComment);
        commentNameElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(editedComment.name);
        commentTextElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(editedComment.body);
        commentAuthorElement.textContent = `Authors email: ${editedComment.email}`;
    }));
    return liElement;
}
init();
