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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_entity_1 = require("../../entities/post.entity");
const post_repository_1 = require("./post.repository");
const class_transformer_1 = require("class-transformer");
let PostService = class PostService {
    constructor(repository) {
        this.repository = repository;
    }
    removePost(id) {
        this.repository.delete(id);
    }
    async createPost(params) {
        const data = (0, class_transformer_1.plainToInstance)(post_entity_1.PostEntity, params);
        return this.repository.save(data);
    }
    async updatePost(id, params) {
        const data = await this.repository.findOneByOrFail({ id });
        const dataSave = (0, class_transformer_1.plainToInstance)(post_entity_1.PostEntity, Object.assign(Object.assign({}, data), params));
        return this.repository.save(dataSave);
    }
    async getListPost() {
        const data = await this.repository.find();
        return data.map(mapPostEntityToDto);
    }
    async getDetailPost(id) {
        const data = await this.repository.findOneByOrFail({ id });
        return data;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_repository_1.PostRepository])
], PostService);
const mapPostEntityToDto = (post) => {
    const { title, createdAt, updatedAt, id, isShowTop } = post;
    return {
        title,
        createdAt,
        updatedAt,
        id,
        isShowTop
    };
};
//# sourceMappingURL=post.service.js.map