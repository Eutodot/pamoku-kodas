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
const albumsWrapper = document.querySelector('#albums-wrapper');
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const header = (0, header_ts_1.default)();
        document.body.prepend(header);
        // changeNavigationStyle()
        const albumsArr = yield getAlbums();
        albumsArr.forEach((album) => __awaiter(this, void 0, void 0, function* () {
            const singleAlbumWrapper = document.createElement('a');
            const albumNameElement = document.createElement('p');
            const albumAuthorElement = document.createElement('p');
            const albumInsidesElement = document.createElement('p');
            const albumPhotoElement = document.createElement('img');
            albumNameElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(album.title);
            albumAuthorElement.textContent = `Author: ${album.user.name}`;
            albumInsidesElement.textContent = `Photos in album: ${album.photos.length}`;
            albumPhotoElement.src = getOnePhoto(album.photos);
            singleAlbumWrapper.href = `album.html?albumId=${album.id}`;
            singleAlbumWrapper.append(albumNameElement, albumAuthorElement, albumInsidesElement, albumPhotoElement);
            albumsWrapper.append(singleAlbumWrapper);
        }));
    });
}
function getAlbums() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos');
        const albumsArr = yield response.json();
        return albumsArr;
    });
}
// async function getAuthorsName(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     const albumAuthor = await response.json()
//     const albumAuthorName = albumAuthor.name
//     return albumAuthorName
// }
// async function getPhotosAmount(albumId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
//     const photosArr = await response.json()
//     const photosAmount = photosArr.length
//     return photosAmount
// }
function getOnePhoto(photosArr) {
    let randomNumInArr = Math.floor(Math.random() * photosArr.length);
    const photoUrl = photosArr[randomNumInArr].thumbnailUrl;
    return photoUrl;
}
// function changeNavigationStyle(){
//     const navigationElement = document.querySelector('#navigation')
//     const sendToAlbums = navigationElement.querySelector('#send-to-albums')
//     sendToAlbums.style.fontWeight = "900"
// }
init();
