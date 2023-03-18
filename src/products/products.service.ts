import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from '../dto/createProducts.dto';
import { UpdateProductDto } from '../dto/updateProducts.dto';
import { customSort } from '../functions/sort';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
  ) {}
  
  /**
   * Get a product by ID.
   *
   * @param productId The ID of the product to retrieve.
   * @returns The product with the given ID, or `null` if it doesn't exist.
   */
  async getProducts(ProductID: number): Promise<Products> {
    return this.productRepository.findOneBy({ ProductID });
  }

  /**
   * Get all products, optionally sorted by a given field.
   *
   * @param sort The field to sort by, if any.
   * @returns An array of products, possibly sorted by the given field.
   */
  async getAllProducts(sort: string | undefined): Promise<Products[]> {
    let products = await this.productRepository.find();
    if (sort) {
      products = customSort(products, sort);
    }
    return products;
  }

   /**
   * Create a new product.
   *
   * @param createProductDto The data for the new product.
   * @returns The newly created product.
   */
  async createProducts(ProductDetails: CreateProductDto): Promise<Products> {
    const newProduct = this.productRepository.create({ ...ProductDetails, createdAt: new Date() });
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  
  async updateProducts(ProductID: number, updateProductDetails: UpdateProductDto): Promise<Products> {
    await this.productRepository.update({ ProductID }, { ...updateProductDetails, updatedAt: new Date() });
    const updatedProduct = await this.productRepository.findOneBy({ ProductID });
    return updatedProduct;
  }

  
    /**
   * Delete a product by ID.
   *
   * @param productId The ID of the product to delete.
   * @returns `true` if the product was deleted, or `false` if it doesn't exist.
   */
  async deleteProducts(ProductID: number) {
    return await this.productRepository.delete({ ProductID });
  }
}
