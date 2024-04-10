"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordDto = exports.UpdateUserRequest = exports.CreateUserRequest = exports.UserResponse = exports.UserOTPRequest = exports.UserResetPassRequest = exports.UserRequest = exports.UserDto = void 0;
const constant_1 = require("../../../helper/constant");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UserDto {
    constructor(user) {
        const { balance, password, is2FA, device } = user, data = __rest(user, ["balance", "password", "is2FA", "device"]);
        Object.assign(this, data);
    }
}
exports.UserDto = UserDto;
class UserRequest {
    constructor() {
        this.username = '';
        this.phone = '';
        this.ip = '';
        this.take = 10;
        this.page = 1;
    }
}
exports.UserRequest = UserRequest;
class UserResetPassRequest {
}
exports.UserResetPassRequest = UserResetPassRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserResetPassRequest.prototype, "email", void 0);
class UserOTPRequest {
}
exports.UserOTPRequest = UserOTPRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserOTPRequest.prototype, "otp", void 0);
class UserResponse {
    constructor(data, page = 0, take = 10, totalRecord = 0, yesterdayUser) {
        this.totalRecord = 0;
        this.page = 0;
        this.limit = 0;
        this.currentPage = 1;
        this.yesterdayUser = 0;
        this.data = data;
        this.limit = take;
        this.totalRecord = totalRecord;
        this.currentPage = page || 1;
        this.page = Math.ceil(totalRecord / take);
        this.yesterdayUser = yesterdayUser;
    }
}
exports.UserResponse = UserResponse;
class CreateUserRequest {
}
exports.CreateUserRequest = CreateUserRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateUserRequest.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email address' }),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateUserRequest.prototype, "is2FA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateUserRequest.prototype, "balance", void 0);
class UpdateUserRequest {
}
exports.UpdateUserRequest = UpdateUserRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateUserRequest.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateUserRequest.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateUserRequest.prototype, "isAffiliate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserRequest.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserRequest.prototype, "confirmPassword", void 0);
class ChangePasswordDto {
}
exports.ChangePasswordDto = ChangePasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
//# sourceMappingURL=user.dto.js.map