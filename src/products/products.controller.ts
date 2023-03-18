import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common/decorators';
import { Response } from 'express';
import { CreateProductDto } from '../dto/createProducts.dto';
import { UpdateProductDto } from '../dto/updateProducts.dto';
import { ProductsService } from './products.service';
import { Products } from '../entities/Products.entity';
import { customSort } from '../functions/sort';
import { HttpStatus, ParseIntPipe } from '@nestjs/common';
import { Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(private ProductsService: ProductsService){}

    // Get a product by ID
    // Example request: GET /products/1111
    @Get(':ProductID')
    async getProducts(@Param('ProductID',ParseIntPipe)ProductID:number, @Res() res: Response){
        const product: Products = await this.ProductsService.getProducts(ProductID);
        if(product) {
            // Return the product and a status code of 200 (OK) if it exists
            res.header('Content-type', 'application/json').status(HttpStatus.OK).send({ status: HttpStatus.OK + ' Ok', data: product });
        } else {
            // Return an error message and a status code of 404 (Not Found) if the product does not exist
            res.header('Content-type', 'application/json').status(HttpStatus.NOT_FOUND).send({ status: HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }

    // Get all products with optional sorting
    // Example request: GET /products?sort=weighted_score
    @Get()
    async getAllProducts(@Res() res: Response, @Query('sort') sort?: string){
        var product: Products[] = await this.ProductsService.getAllProducts(sort);
        if(product.length > 0) {
         product = customSort(product, sort); // Sort the products based on the given query parameter 'sort'
       
         // Return the sorted products and a status code of 200 (OK) if there are any
         res.header('Content-type', 'application/json').status(HttpStatus.OK).send({ status: HttpStatus.OK + ' Ok', data: product });
            
        } else {
            
           // Return an error message and a status code of 404 (Not Found) if there are no products
            res.header('Content-type', 'application/json').status(HttpStatus.NOT_FOUND).send({ status: HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }

    // Create a new product
    // Example request: POST /products
    // Request body: { "ProductName": "Example Product", "ProductDescription": "This is an example product.", "ProductPrice": 1000, "ProductQuantity": 50, "ProductRating": 4 }
    @Post()
    async createProducts(@Body() createProductDto: CreateProductDto,@Res() res: Response){
        const product: Products = await this.ProductsService.createProducts(createProductDto);
        if(product) {
            // Return an error message and a status code of 400 (Bad Request) if the request body is invalid
            res.header('Content-type', 'application/json').status(HttpStatus.CREATED).send({ status: HttpStatus.CREATED + ' Created', data: product });
        } else {
            // Return the new product and a status code of 200 (OK) if it was created successfully
            res.header('Content-type', 'application/json').status(HttpStatus.BAD_REQUEST).send({ status: HttpStatus.BAD_REQUEST + ' Bad Request' });
        }
    }

    // Update a product by ID
    // Example request: PATCH /products/1111
    // Request body: { "ProductName": "Updated Product Name" }
    @Patch(':ProductID')
    async updateProductsById(@Param('ProductID',ParseIntPipe)ProductID:number, @Body() updateProductDto: UpdateProductDto, @Res() res: Response){
        const product = await this.ProductsService.updateProducts(ProductID,updateProductDto);
        if(product) {
           
            res.header('Content-type', 'application/json').status(HttpStatus.OK).send({ status: HttpStatus.OK + ' Ok', data: product });
        } else {
          
            res.header('Content-type', 'application/json').status(HttpStatus.NOT_FOUND).send({ status: HttpStatus.NOT_FOUND + ' Not Found' });
        }
    }

    // Delete a product by ID
    // Example request: DELETE /products/1111
    @Delete(':ProductID')
    async deleteProductsById(@Param('ProductID',ParseIntPipe)ProductID:number, @Res() res: Response){
        const deleted = await this.ProductsService.deleteProducts(ProductID);
        if(deleted) {
           
            res.header('Content-type', 'application/json').status(HttpStatus.OK).send({ status: HttpStatus.OK + ' Ok' });
        } else {
            res.header('Content-type', 'application/json').status(HttpStatus.NOT_FOUND).send({ status: HttpStatus.NOT_FOUND + ' Not Found' });
        
        }
    }
}
