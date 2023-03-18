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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("../entities/products.entity");
const sort_1 = require("../functions/sort");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProducts(ProductID) {
        return this.productRepository.findOneBy({ ProductID });
    }
    async getAllProducts(sort) {
        let products = await this.productRepository.find();
        if (sort) {
            products = (0, sort_1.customSort)(products, sort);
        }
        return products;
    }
    async createProducts(ProductDetails) {
        const newProduct = this.productRepository.create(Object.assign(Object.assign({}, ProductDetails), { createdAt: new Date() }));
        await this.productRepository.save(newProduct);
        return newProduct;
    }
    async updateProducts(ProductID, updateProductDetails) {
        await this.productRepository.update({ ProductID }, Object.assign(Object.assign({}, updateProductDetails), { updatedAt: new Date() }));
        const updatedProduct = await this.productRepository.findOneBy({ ProductID });
        return updatedProduct;
    }
    async deleteProducts(ProductID) {
        return await this.productRepository.delete({ ProductID });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map