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
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const header = (0, header_ts_1.default)();
        document.body.prepend(header);
        const contentElement = document.querySelector('#content');
        const titleElement = document.createElement('h1');
        contentElement.append(titleElement);
        const userId = (0, functions_ts_1.getUrlParams)('userId');
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`);
        const userData = yield response.json();
        console.log(userData);
        if (Object.keys(userData).length === 0) {
            titleElement.textContent = 'User not found';
            const returnLink = document.createElement('a');
            returnLink.textContent = 'Return to users page';
            returnLink.href = 'users.html';
            titleElement.after(returnLink);
            return;
        }
        titleElement.textContent = userData.name;
        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Username: ${userData.username}`;
        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${userData.email}`;
        const addressElement = document.createElement('a');
        addressElement.textContent = `Address: ${userData.address.street} ${userData.address.suite}, ${userData.address.city}, zip code: ${userData.address.zipcode}`;
        addressElement.href = `https://www.google.com/maps/search/?api=1&query=${userData.address.geo.lat}%2C${userData.address.geo.lng}`;
        addressElement.target = '_blank';
        const phoneElement = document.createElement('p');
        phoneElement.textContent = `Phone number: ${userData.phone}`;
        const websiteElement = document.createElement('p');
        websiteElement.textContent = `Website: ${userData.website}`;
        const workElement = document.createElement('p');
        workElement.textContent = `Work: ${userData.company.name}`;
        const userPostsWrapper = document.createElement('div');
        userPostsWrapper.textContent = `${userData.name}'s posts:`;
        const userPostsList = document.createElement('ul');
        userData.posts.forEach(post => {
            const liElement = document.createElement('li');
            const postTitleElement = document.createElement('a');
            postTitleElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(post.title);
            postTitleElement.href = `post.html?postId=${post.id}`;
            liElement.append(postTitleElement);
            userPostsList.append(liElement);
        });
        userPostsWrapper.append(userPostsList);
        const userAlbumsWrapper = document.createElement('div');
        userAlbumsWrapper.textContent = `${userData.name}'s albums:`;
        const userAlbumsList = document.createElement('ul');
        userData.albums.forEach(album => {
            const liElement = document.createElement('li');
            const albumTitleElement = document.createElement('a');
            albumTitleElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(album.title);
            albumTitleElement.href = `album.html?albumId=${album.id}`;
            liElement.append(albumTitleElement);
            userAlbumsList.append(liElement);
        });
        userAlbumsWrapper.append(userAlbumsList);
        titleElement.after(usernameElement, emailElement, addressElement, phoneElement, websiteElement, workElement, userPostsWrapper, userAlbumsWrapper);
    });
}
init();
