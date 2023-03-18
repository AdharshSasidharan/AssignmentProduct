/*
defines a class called AppController
 This class is marked with a @Controller() decorator, which means
  that it will act as a controller for a web server.

The constructor function takes an instance of AppService as a parameter, 
which is marked as readonly to ensure that it cannot be changed once it has been set.
 This is known as dependency injection, which means that the AppController depends on AppService to work.

The @Get() decorator is used to mark a function called getHello() as a handler for HTTP GET requests
 to the root path /. When this route is accessed, the getHello() function will be 
 called and will return a string that is returned by calling the getHello() method 
 of the AppService instance.

Overall, this code sets up a controller that handles HTTP GET requests to the root path / by using
 an instance of the AppService class.

*/
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
