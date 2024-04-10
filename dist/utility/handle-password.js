"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexPassword = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = (password) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
};
exports.hashPassword = hashPassword;
const comparePassword = (hashPassword, password) => {
    return bcrypt.compareSync(password, hashPassword);
};
exports.comparePassword = comparePassword;
const regexPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
};
exports.regexPassword = regexPassword;
//# sourceMappingURL=handle-password.js.map