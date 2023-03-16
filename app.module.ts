import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Products } from './entities/products.entity';
import { ProductModule } from './products/products.module';



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