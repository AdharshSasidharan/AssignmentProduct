import { Repository } from 'typeorm';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from '../dto/createProducts.dto';
import { UpdateProductDto } from '../dto/updateProducts.dto';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Products>);
    getProducts(ProductID: number): Promise<Products>;
    getAllProducts(sort: string | undefined): Promise<Products[]>;
    createProducts(ProductDetails: CreateProductDto): Promise<Products>;
    updateProducts(ProductID: number, updateProductDetails: UpdateProductDto): Promise<Products>;
    deleteProducts(ProductID: number): Promise<import("typeorm").DeleteResult>;
}
