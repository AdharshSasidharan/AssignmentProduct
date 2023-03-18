import { NestFactory } from '@nestjs/core';// Importing the NestFactory class from the '@nestjs/core' module
import { AppModule } from './app.module';// Importing the AppModule which is the root module of the Nest application
// Defining an asynchronous function called 'bootstrap'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);// Creating an instance of the Nest application by passing in the AppModule to the create() method of the NestFactory class
  await app.listen(3000);// Starting the Nest application by calling the listen() method and specifying the port number (3000 in this case)
}
bootstrap();// Calling the 'bootstrap' function to start the Nest application
