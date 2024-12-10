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
        const albumId = (0, functions_ts_1.getUrlParams)('albumId');
        const response = yield fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_embed=photos&_expand=user`);
        const albumData = yield response.json();
        if (Object.keys(albumData).length === 0) {
            titleElement.textContent = 'Album not found';
            const returnLink = document.createElement('a');
            returnLink.textContent = 'Return to albums page';
            returnLink.href = 'albums.html';
            titleElement.after(returnLink);
            return;
        }
        titleElement.textContent = (0, functions_ts_1.firstLetterUpperCase)(albumData.title);
        const authorElement = document.createElement('a');
        authorElement.textContent = `Author: ${albumData.user.name}`;
        authorElement.href = `user.html?userId=${albumData.userId}`;
        const addPhotosWrapper = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.textContent = 'Add a photo:';
        const formControl1 = document.createElement('div');
        const inputLabel = document.createElement('label');
        inputLabel.for = 'photo-input';
        inputLabel.textContent = 'Paste photo URL: ';
        const URLinput = document.createElement('input');
        inputLabel.name = 'photo-input';
        inputLabel.id = 'photo-input';
        formControl1.append(inputLabel, URLinput);
        const formControl2 = document.createElement('div');
        const photoInputLabel = document.createElement('label');
        photoInputLabel.for = 'photo-title';
        photoInputLabel.textContent = 'Photo title: ';
        const photoTitleInput = document.createElement('input');
        inputLabel.name = 'photo-title';
        inputLabel.id = 'photo-title';
        const addPhotoButton = document.createElement('button');
        addPhotoButton.id = 'add-photo-button';
        addPhotoButton.textContent = 'Add photo';
        formControl2.append(photoInputLabel, photoTitleInput, addPhotoButton);
        addPhotosWrapper.append(pElement, formControl1, formControl2);
        const items = albumData.photos.map(photo => ({ src: photo.url, srct: photo.thumbnailUrl, title: (0, functions_ts_1.firstLetterUpperCase)(photo.title) }));
        const galleryElement = document.createElement('div');
        galleryElement.id = 'gallery';
        contentElement.append(titleElement, authorElement, addPhotosWrapper, galleryElement);
        addPhotoButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
            const newPhoto = {
                albumId: albumData.id,
                url: URLinput.value,
                thumbnailUrl: URLinput.value,
                title: photoTitleInput.value,
            };
            const response = yield fetch('https://jsonplaceholder.typicode.com/photos', {
                method: 'POST',
                body: JSON.stringify(newPhoto),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const createdPhoto = yield response.json();
            albumData.photos.push(createdPhoto);
            showPhotos(galleryElement, albumData.photos);
            URLinput.value = '';
            photoTitleInput.value = '';
        }));
        showPhotos(galleryElement, albumData.photos);
    });
}
function showPhotos(wrapper, photosArr) {
    const items = photosArr.map(photo => ({ src: photo.url, srct: photo.thumbnailUrl, title: (0, functions_ts_1.firstLetterUpperCase)(photo.title) }));
    jQuery(wrapper).nanogallery2({
        // ### gallery settings ### 
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        thumbnailDisplayTransition: 'scaleDown',
        thumbnailHoverEffect2: 'scale120',
        itemsBaseURL: 'https://via.placeholder.com/',
        // ### gallery content ### 
        items
    });
    return wrapper;
}
init();
