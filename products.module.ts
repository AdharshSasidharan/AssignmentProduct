//importing the necessary modules, controllers, and services to create a ProductModule.
// The '@nestjs/common' module provides common NestJS decorators, such as @Module, @Controller, and @Injectable.
// The ProductsController and ProductsService are imported from their respective files.
// The TypeOrmModule is used for integrating the TypeORM package into a NestJS application.
// The Products entity is imported from its file.
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Products } from '../entities/products.entity'
@Module({
  imports:[TypeOrmModule.forFeature([Products])],// The forFeature method registers the Products entity with TypeORM and makes it available to be injected into other modules.
  controllers: [ProductsController],// The ProductsController is registered as a controller in the ProductModule.
  providers: [ProductsService]// The ProductsService is registered as a provider in the ProductModule.
})
export class ProductModule {}// The ProductModule is exported as a module and can be imported into other modules.
