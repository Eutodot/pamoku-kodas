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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createSearchResult;
const functions_ts_1 = require("./functions.ts");
function createSearchResult(searchPhrase, searchPlace) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchResults = document.createElement('div');
        let postsArr = [];
        let usersArr = [];
        let albumsArr = [];
        let commentsArr = [];
        let photosArr = [];
        switch (searchPlace) {
            case 'all':
                postsArr = yield getWantedPosts(searchPhrase);
                usersArr = yield getWantedUsers(searchPhrase);
                albumsArr = yield getWantedAlbums(searchPhrase);
                searchResults.append(createUl(usersArr, 'users', 'user'));
                searchResults.append(createUl(postsArr, 'posts', 'post'));
                searchResults.append(createUl(albumsArr, 'albums', 'album'));
                break;
            case 'users':
                usersArr = yield getWantedUsers(searchPhrase);
                searchResults.append(createUl(usersArr, 'users', 'user'));
                break;
            case 'posts':
                postsArr = yield getWantedPosts(searchPhrase);
                searchResults.append(createUl(postsArr, 'posts', 'post'));
                break;
            case 'comments':
                commentsArr = yield getWantedComments(searchPhrase);
                searchResults.append(createUl(commentsArr, 'comments', 'comment'));
                break;
            case 'albums':
                albumsArr = yield getWantedAlbums(searchPhrase);
                searchResults.append(createUl(albumsArr, 'albums', 'album'));
                break;
            case 'photos':
                photosArr = yield getWantedPhotos(searchPhrase);
                searchResults.append(createUl(photosArr, 'photos', 'photo'));
                break;
        }
        return searchResults;
    });
}
function getWantedPosts(phrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts?q=${phrase}`);
        const postsArr = yield response.json();
        return postsArr;
    });
}
function getWantedPhotos(phrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/photos?q=${phrase}`);
        const photosArr = yield response.json();
        return photosArr;
    });
}
function getWantedComments(phrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/comments?q=${phrase}`);
        const commentsArr = yield response.json();
        return commentsArr;
    });
}
function getWantedUsers(phrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users?q=${phrase}`);
        const usersArr = yield response.json();
        return usersArr;
    });
}
function getWantedAlbums(phrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/albums?q=${phrase}`);
        const albumsArr = yield response.json();
        return albumsArr;
    });
}
function createUl(arr, name, type) {
    const ulWrapper = document.createElement('div');
    const ulName = document.createElement('p');
    ulName.textContent = (0, functions_ts_1.firstLetterUpperCase)(name) + ':';
    if (arr.length == 0) {
        ulName.textContent = `No ${name} have this phrase.`;
        return ulName;
    }
    const customUl = document.createElement('ul');
    arr.forEach(item => {
        const liElement = document.createElement('li');
        const itemElement = document.createElement('a');
        if (type == 'user' || type == 'comment') {
            itemElement.textContent = item.name;
        }
        else {
            itemElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(item.title);
        }
        itemElement.href = `${type}.html?${type}Id=${item.id}`;
        liElement.append(itemElement);
        customUl.append(liElement);
    });
    ulWrapper.append(ulName, customUl);
    return ulWrapper;
}
