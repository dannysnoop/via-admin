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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_dto_1 = require("./DTO/product.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../guards/auth.guard");
let ProductController = class ProductController {
    constructor(IProductService) {
        this.IProductService = IProductService;
    }
    async exportTxtFileDetailProduct(id, res) {
        try {
            const fileName = 'data.txt';
            const data = await this.IProductService.exportProductDetail(id);
            const stringWithLineBreaks = data.join('\n');
            res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
            res.setHeader('Content-Type', 'text/plain');
            res.send(stringWithLineBreaks);
        }
        catch (error) {
            res.status(500).send(`Error generating JSON: ${error}`);
        }
    }
    getProductForClient(query) {
        return this.IProductService.getProductByCategoryIdAndProductName(query);
    }
    getAllProduct() {
        return this.IProductService.getAllProduct();
    }
    getProductById(id) {
        return this.IProductService.getProductById(id);
    }
    createProduct(params) {
        return this.IProductService.createProduct(params);
    }
    updateProduct(id, params) {
        return this.IProductService.updateProduct(id, params);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "exportTxtFileDetailProduct", null);
__decorate([
    (0, common_1.Get)('/client'),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'productName', required: false, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductQueryRequest]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProductForClient", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductCreateRequest]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_dto_1.ProductUpdateRequest]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('api/product'),
    (0, swagger_1.ApiTags)('product'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Inject)('IProductService')),
    __metadata("design:paramtypes", [Object])
], ProductController);
//# sourceMappingURL=product.controller.js.map