"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPassword = exports.makeId = void 0;
function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
exports.makeId = makeId;
function generateRandomPassword() {
    const min = 100000000;
    const max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.generateRandomPassword = generateRandomPassword;
//# sourceMappingURL=random-character.js.map