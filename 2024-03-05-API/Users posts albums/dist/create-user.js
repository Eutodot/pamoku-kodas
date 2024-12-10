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
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const header = (0, header_ts_1.default)();
        document.body.prepend(header);
        const createUserForm = document.querySelector('#user-form');
        createUserForm.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const name = event.target.name.value;
            const username = event.target.username.value;
            const email = event.target.email.value;
            const street = event.target.street.value;
            const suite = event.target.suite.value;
            const city = event.target.city.value;
            const zipCode = event.target["zip-code"].value;
            const latitude = event.target.latitude.value;
            const longitude = event.target.longitude.value;
            const phone = event.target.phone.value;
            const website = event.target.website.value;
            const companyName = event.target["company-name"].value;
            const companyCatchPhrase = event.target["company-catch-phrase"].value;
            const companyBs = event.target["company-bs"].value;
            const newUser = {
                name,
                username,
                email,
                address: {
                    street,
                    suite,
                    city,
                    zipcode: zipCode,
                    geo: {
                        lat: latitude,
                        lng: longitude,
                    }
                },
                phone,
                website,
                company: {
                    name: companyName,
                    catchPhrase: companyCatchPhrase,
                    bs: companyBs,
                }
            };
            const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const createdUser = yield response.json();
            createUserForm.after(createUser(createdUser));
        }));
    });
}
function createUser(info) {
    console.log(info);
    const postWrapper = document.createElement('div');
    const titleElement = document.createElement('h2');
    titleElement.textContent = info.name;
    const usernameElement = document.createElement('p');
    usernameElement.textContent = `Username: ${info.username}`;
    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${info.email}`;
    const addressElement = document.createElement('a');
    addressElement.textContent = `Address: ${info.address.street} ${info.address.suite}, ${info.address.city}, zip code: ${info.address.zipcode}`;
    addressElement.href = `https://www.google.com/maps/search/?api=1&query=${info.address.geo.lat}%2C${info.address.geo.lng}`;
    addressElement.target = '_blank';
    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Phone number: ${info.phone}`;
    const websiteElement = document.createElement('p');
    websiteElement.textContent = `Website: ${info.website}`;
    const workElement = document.createElement('p');
    workElement.textContent = `Work: ${info.company.name}`;
    const workCatchPhraseElement = document.createElement('p');
    workCatchPhraseElement.textContent = `${info.company.name}'s catch phrase: ${info.company.catchPhrase}`;
    const workBsElement = document.createElement('p');
    workBsElement.textContent = `${info.company.name}'s bs: ${info.company.bs}`;
    postWrapper.append(titleElement, usernameElement, emailElement, addressElement, phoneElement, websiteElement, workElement, workCatchPhraseElement, workBsElement);
    return postWrapper;
}
init();
