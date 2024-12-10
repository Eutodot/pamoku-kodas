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
exports.getUrlParams = getUrlParams;
exports.firstLetterUpperCase = firstLetterUpperCase;
exports.getUsers = getUsers;
function getUrlParams(param) {
    const queryParams = location.search;
    const urlParams = new URLSearchParams(queryParams);
    const value = urlParams.get(param);
    return value;
}
function firstLetterUpperCase(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
        const usersArr = yield response.json();
        return usersArr;
    });
}
