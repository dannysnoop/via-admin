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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./DTO/user.dto");
const swagger_1 = require("@nestjs/swagger");
const message_1 = require("../../helper/message");
const user_decorator_1 = require("../../decorator/user.decorator");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_decorator_1 = require("../../decorator/roles.decorator");
const constant_1 = require("../../helper/constant");
const handle_date_1 = require("../../utility/handle-date");
const cache_manager_1 = require("@nestjs/cache-manager");
let UserController = class UserController {
    constructor(IUserService, cacheManager) {
        this.IUserService = IUserService;
        this.cacheManager = cacheManager;
    }
    getAllNewUser() {
        return this.IUserService.getAllNewUser();
    }
    resetPassword(params) {
        const { email } = params;
        return this.IUserService.resetPassword(email);
    }
    OTPPassword(params) {
        const { otp } = params;
        return this.IUserService.otpPassword(otp);
    }
    getAllUser(query) {
        return this.IUserService.getAllUser(query);
    }
    async getUsersByExcel(query, res) {
        const excelBuffer = await this.IUserService.exportExcelFileUser(query);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=user-${(0, handle_date_1.getDDMMYYYCurrentDate)()}.xlsx`);
        res.send(excelBuffer);
    }
    activeAllUser() {
        return this.IUserService.activeAllUser();
    }
    createUser(params) {
        return this.IUserService.createUser(params);
    }
    changePassword(user, changePasswordParams) {
        return this.IUserService.changePassword(user, changePasswordParams);
    }
    updateUser(id, params) {
        return this.IUserService.updateUser(id, params);
    }
    getCurrentUser(user) {
        const { id } = user;
        return this.IUserService.getUserById(+id);
    }
    getUserById(id) {
        return this.IUserService.getUserById(+id);
    }
    getSecretCode(user) {
        return this.IUserService.genSecretCodeForTransfer(user);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/new-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllNewUser", null);
__decorate([
    (0, common_1.Post)('/reset-pass'),
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserResetPassRequest }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserResetPassRequest]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('/confirm-otp'),
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserOTPRequest }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserOTPRequest]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "OTPPassword", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'phone', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'ip', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'username', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, type: String }),
    (0, roles_decorator_1.Roles)(constant_1.ROLE.MEMBER),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserRequest]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Post)('/excel-user'),
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserRequest }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserRequest, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersByExcel", null);
__decorate([
    (0, common_1.Post)('/active-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "activeAllUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
        type: user_dto_1.UserDto,
    }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.CreateUserRequest }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserRequest]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('/change-password'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto,
        user_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
        type: user_dto_1.UserDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UpdateUserRequest]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)('/current-user'),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
        type: user_dto_1.UserDto,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
        type: user_dto_1.UserDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('/user-scretcode'),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
        type: user_dto_1.UserDto,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getSecretCode", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('api/user'),
    (0, swagger_1.ApiTags)('users'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)('IUserService')),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object, cache_manager_1.Cache])
], UserController);
//# sourceMappingURL=user.controller.js.map