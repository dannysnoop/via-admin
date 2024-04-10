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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const user_dto_1 = require("./DTO/user.dto");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../../entities/user.entity");
const ExcelJS = require("exceljs");
const handle_password_1 = require("../../utility/handle-password");
const message_1 = require("../../helper/message");
const handle_date_1 = require("../../utility/handle-date");
const random_character_1 = require("../../utility/random-character");
const moment = require("moment/moment");
const send_email_reset_password_1 = require("../../utility/send-email-reset-password");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async otpPassword(OTP) {
        const user = await this.userRepository.findOne({ where: { OTP } });
        if (!user) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.OTP_WRONG, common_1.HttpStatus.FORBIDDEN);
        }
        const randomPassword = (0, random_character_1.generateRandomPassword)().toString();
        user.password = (0, handle_password_1.hashPassword)(randomPassword);
        user.OTP = null;
        this.userRepository.save(user);
        (0, send_email_reset_password_1.mailSendPassword)(user.email, randomPassword);
        return {
            message: 'Success',
            statusCode: 200,
        };
    }
    searchUserBySecretCode(secretCode = '') {
        return this.userRepository.findOne({
            where: { secretCodeTransfer: secretCode },
        });
    }
    async activeAllUser() {
        const users = await this.userRepository.find();
        users.forEach((item) => (item.isActive = true));
        await this.userRepository.save(users);
    }
    async genSecretCodeForTransfer(user) {
        const userEntity = (0, class_transformer_1.plainToInstance)(user_entity_1.UserEntity, user);
        const random = (0, random_character_1.makeId)(6);
        userEntity.secretCodeTransfer = random;
        this.userRepository.save(userEntity);
        return {
            message: random,
            statusCode: 200
        };
    }
    async getAllNewUser() {
        const [startYesterday, endYesterday, currentDate] = (0, handle_date_1.getTimeYesterday)();
        const [users, total] = await this.userRepository.findAndCount({
            where: {
                createdAt: (0, typeorm_1.Between)(endYesterday.toString(), currentDate.toString()),
            },
            select: {
                id: true,
                email: true,
                totalBalance: true,
                balance: true,
                device: true,
                lastLogin: true,
                ip: true,
                isActive: true,
                discount: true,
                createdAt: true,
                updatedAt: true,
                is2FA: true,
                username: true,
                phone: true,
            },
        });
        const yesterdayUserCount = await this.userRepository.count({
            where: {
                createdAt: (0, typeorm_1.Between)(startYesterday.toString(), endYesterday.toString()),
            },
            select: {
                id: true,
            },
        });
        return new user_dto_1.UserResponse(users, 1, 10000, total, yesterdayUserCount);
    }
    async exportExcelFileUser(params) {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Sheet 1');
        const userResponse = await this.getAllUser(params);
        const data = userResponse.data.map((z) => {
            z.createdAt = moment(+z.createdAt * 1000).format('DD/MM/YYYY hh:mm:ss');
            z.updatedAt = moment(+z.updatedAt * 1000).format('DD/MM/YYYY hh:mm:ss');
            return z;
        });
        const dataArray = [Object.keys(data[0])].concat(data.map((employee) => Object.values(employee)));
        sheet.addRows(dataArray);
        return await workbook.xlsx.writeBuffer();
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        delete user.password;
        delete user.secretCodeTransfer;
        if (!user) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.USER_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        return user;
    }
    async getAllUser(queryParams) {
        const { ip, username, phone, page = 1, take = 10, role } = queryParams;
        const skip = (page - 1) * take || 0;
        const select = {
            id: true,
            email: true,
            totalBalance: true,
            balance: true,
            device: true,
            lastLogin: true,
            ip: true,
            isActive: true,
            discount: true,
            createdAt: true,
            updatedAt: true,
            is2FA: true,
            username: true,
            phone: true,
            role: true,
        };
        if (!(username || ip || phone || role)) {
            const [users, total] = await this.userRepository.findAndCount({
                select,
                skip,
                take,
                order: { id: 'DESC' },
            });
            return new user_dto_1.UserResponse(users, page, take, total);
        }
        const whereCondition = {
            username: (0, typeorm_1.ILike)(`%${(username && username.trim()) || ''}%`),
            phone: (0, typeorm_1.ILike)(`%${(phone && phone.trim()) || ''}%`),
            ip: ip || null,
            role: role || null,
        };
        const [users, total] = await this.userRepository.findAndCount({
            where: whereCondition,
            select,
            skip,
            take,
            order: { id: 'DESC' },
        });
        return new user_dto_1.UserResponse(users, page, take, total);
    }
    async createUser(params) {
        const user = (0, class_transformer_1.plainToInstance)(user_entity_1.UserEntity, params);
        const checkUserExist = await this.userRepository.findOne({
            where: [{ email: user.email }, { phone: user.phone }],
        });
        if (checkUserExist) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.EMAIL_EXISTED, common_1.HttpStatus.FORBIDDEN);
        }
        user.password = (0, handle_password_1.hashPassword)(params.password);
        try {
            const userData = await this.userRepository.save(user);
            return new user_dto_1.UserDto(userData);
        }
        catch (e) {
            console.log(e);
        }
    }
    async updateUser(id, params) {
        const { password, confirmPassword } = params;
        if (password && password != confirmPassword) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.CONFIRM_PASSWORD, common_1.HttpStatus.FORBIDDEN);
        }
        if (password) {
            params.password = (0, handle_password_1.hashPassword)(password);
        }
        delete params.confirmPassword;
        const user = await this.userRepository.findOne({ where: { id: +id } });
        if (!user) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.USER_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const userEntity = await this.userRepository.save((0, class_transformer_1.plainToInstance)(user_entity_1.UserEntity, Object.assign(Object.assign({}, user), params)));
        return new user_dto_1.UserDto(userEntity);
    }
    deleteUser() {
        throw new Error('Method not implemented.');
    }
    async resetPassword(email = '') {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.USER_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const otp = (0, send_email_reset_password_1.generateRandomOTP)();
        user.OTP = otp;
        this.userRepository.save(user);
        (0, send_email_reset_password_1.SendEmailResetPassword)(email, otp);
        return {
            message: 'Success',
            statusCode: 200,
        };
    }
    async checkUserByEmailAndPassword(user) {
        const { username, password } = user;
        const userDb = await this.userRepository.findOne({
            where: [{ email: username }, { phone: username }],
        });
        if (!userDb) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.LOGIN_FAIL, common_1.HttpStatus.FORBIDDEN);
        }
        const check = (0, handle_password_1.comparePassword)(userDb.password, password);
        if (!check) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.LOGIN_FAIL, common_1.HttpStatus.FORBIDDEN);
        }
        return new user_dto_1.UserDto(userDb);
    }
    async changePassword(user, params) {
        const { id } = user;
        const { currentPassword, newPassword } = params;
        const checkRegexPass = (0, handle_password_1.regexPassword)(newPassword);
        if (!checkRegexPass) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.PASSWORD_REGEX, common_1.HttpStatus.FORBIDDEN);
        }
        const userEntity = await this.userRepository.findOne({ where: { id } });
        const checkPassword = (0, handle_password_1.comparePassword)(userEntity.password, currentPassword);
        if (!checkPassword) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.CURRENT_PASSWORD, common_1.HttpStatus.FORBIDDEN);
        }
        userEntity.password = (0, handle_password_1.hashPassword)(newPassword);
        this.userRepository.save(userEntity);
        return {
            status: 200,
            message: 'Success',
        };
    }
    async addBalanceForUser(user, amount) {
        user.balance += +amount;
        user.totalBalance += +amount;
        await this.userRepository.save(user);
    }
    async minusBalanceForUser(user, amount) {
        user.balance -= +amount;
        await this.userRepository.save(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map