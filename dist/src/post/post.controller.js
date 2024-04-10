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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const message_1 = require("../../helper/message");
const post_entity_1 = require("../../entities/post.entity");
const post_dto_1 = require("./DTO/post.dto");
let PostController = class PostController {
    constructor(IPostService) {
        this.IPostService = IPostService;
    }
    getAllPost() {
        return this.IPostService.getListPost();
    }
    createPost(params) {
        return this.IPostService.createPost(params);
    }
    updatePost(id, params) {
        return this.IPostService.updatePost(id, params);
    }
    getPostDetail(id) {
        return this.IPostService.getDetailPost(id);
    }
    removePostDetail(id) {
        return this.IPostService.removePost(id);
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllPost", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
    }),
    (0, swagger_1.ApiBody)({ type: post_entity_1.PostEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.PostCreateRequest]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
    }),
    (0, swagger_1.ApiBody)({ type: post_entity_1.PostEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, post_dto_1.PostUpdateRequest]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostDetail", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "removePostDetail", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('api/post'),
    (0, swagger_1.ApiTags)('post'),
    __param(0, (0, common_1.Inject)('IPostService')),
    __metadata("design:paramtypes", [Object])
], PostController);
//# sourceMappingURL=post.controller.js.map