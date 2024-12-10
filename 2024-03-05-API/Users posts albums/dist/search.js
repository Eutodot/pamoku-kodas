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
const search_result_ts_1 = __importDefault(require("./search-result.ts"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const contentElement = document.querySelector('#content');
        const header = (0, header_ts_1.default)();
        contentElement.prepend(header);
        const searchPhrase = (0, functions_ts_1.getUrlParams)('search-input');
        const searchPlace = (0, functions_ts_1.getUrlParams)('search-select');
        console.log(searchPhrase);
        const searchResult = yield (0, search_result_ts_1.default)(searchPhrase, searchPlace);
        contentElement.append(searchResult);
    });
}
init();
