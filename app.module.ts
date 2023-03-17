/*a module file in a NestJS application. NestJS is a framework for building scalable Node.js applications.
The code imports several modules and entities, including Module and TypeOrmModule
from the @nestjs/common and @nestjs/typeorm packages, respectively./
It also imports AppController and AppService from local files.//

The TypeOrmModule.forRoot() method is used to set up a connection to a MySQL database with
 the following configuration options: type, host, port, username, password, database, entities, and synchronize.*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Products } from './entities/products.entity';
import { ProductModule } from './products/products.module';

/**
 * type: the type of database management system,in this case MySQL
host: the hostname of the MySQL server
port: the port number of the MySQL server.
username: the username to use when connecting to the MySQL serve./
password: the password to use when connecting to the MySQL server
database: the name of the database to use
entities: an array of entities to be used in the application//
synchronize: a boolean that determines whether to synchronize the entities with the database schema. */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Adharsh@_7',
      database: 'products',
      entities:[Products],
      synchronize: false,
    
    }),
    ProductModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 
}
/**The ProductModule is also imported, which is another module file in the application 
 * that likely contains additional controllers and services related to product functionality.

The AppModule class is defined and exported, and includes the controllers
 and providers arrays, which specify the controllers and services that
  are available within the module. */
