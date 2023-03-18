import { Response } from 'express';
import { CreateProductDto } from '../dto/createProducts.dto';
import { UpdateProductDto } from '../dto/updateProducts.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private ProductsService;
    constructor(ProductsService: ProductsService);
    getProducts(ProductID: number, res: Response): Promise<void>;
    getAllProducts(res: Response, sort?: string): Promise<void>;
    createProducts(createProductDto: CreateProductDto, res: Response): Promise<void>;
    updateProductsById(ProductID: number, updateProductDto: UpdateProductDto, res: Response): Promise<void>;
    deleteProductsById(ProductID: number, res: Response): Promise<void>;
}
