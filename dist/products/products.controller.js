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
exports.ProductsController = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const createProducts_dto_1 = require("../dto/createProducts.dto");
const updateProducts_dto_1 = require("../dto/updateProducts.dto");
const products_service_1 = require("./products.service");
const sort_1 = require("../functions/sort");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let ProductsController = class ProductsController {
    constructor(ProductsService) {
        this.ProductsService = ProductsService;
    }
    async getProducts(ProductID, res) {
        const product = await this.ProductsService.getProducts(ProductID);
        if (product) {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.OK).send({ status: common_1.HttpStatus.OK + ' Ok', data: product });
        }
        else {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.NOT_FOUND).send({ status: common_1.HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }
    async getAllProducts(res, sort) {
        var product = await this.ProductsService.getAllProducts(sort);
        if (product.length > 0) {
            product = (0, sort_1.customSort)(product, sort);
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.OK).send({ status: common_1.HttpStatus.OK + ' Ok', data: product });
        }
        else {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.NOT_FOUND).send({ status: common_1.HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }
    async createProducts(createProductDto, res) {
        const product = await this.ProductsService.createProducts(createProductDto);
        if (product) {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.CREATED).send({ status: common_1.HttpStatus.CREATED + ' Created', data: product });
        }
        else {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.BAD_REQUEST).send({ status: common_1.HttpStatus.BAD_REQUEST + ' Bad Request' });
        }
    }
    async updateProductsById(ProductID, updateProductDto, res) {
        const product = await this.ProductsService.updateProducts(ProductID, updateProductDto);
        if (product) {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.OK).send({ status: common_1.HttpStatus.OK + ' Ok', data: product });
        }
        else {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.NOT_FOUND).send({ status: common_1.HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }
    async deleteProductsById(ProductID, res) {
        const deleted = await this.ProductsService.deleteProducts(ProductID);
        if (deleted) {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.OK).send({ status: common_1.HttpStatus.OK + ' Ok' });
        }
        else {
            res.header('Content-type', 'application/json').status(common_1.HttpStatus.NOT_FOUND).send({ status: common_1.HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }
};
__decorate([
    (0, decorators_1.Get)(':ProductID'),
    __param(0, (0, decorators_1.Param)('ProductID', common_1.ParseIntPipe)),
    __param(1, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, decorators_1.Get)(),
    __param(0, (0, decorators_1.Res)()),
    __param(1, (0, common_2.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __param(1, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProducts_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProducts", null);
__decorate([
    (0, decorators_1.Patch)(':ProductID'),
    __param(0, (0, decorators_1.Param)('ProductID', common_1.ParseIntPipe)),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateProducts_dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProductsById", null);
__decorate([
    (0, decorators_1.Delete)(':ProductID'),
    __param(0, (0, decorators_1.Param)('ProductID', common_1.ParseIntPipe)),
    __param(1, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProductsById", null);
ProductsController = __decorate([
    (0, decorators_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map