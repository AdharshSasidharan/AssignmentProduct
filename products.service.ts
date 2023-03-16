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

  async getProducts(ProductID: number): Promise<Products> {
    return this.productRepository.findOneBy({ ProductID });
  }

  async getAllProducts(sort: string | undefined): Promise<Products[]> {
    let products = await this.productRepository.find();
    if (sort) {
      products = customSort(products, sort);
    }
    return products;
  }

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

  async deleteProducts(ProductID: number) {
    return await this.productRepository.delete({ ProductID });
  }
}
