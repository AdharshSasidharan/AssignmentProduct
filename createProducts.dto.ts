import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  ProductID: number;

  @IsNotEmpty()
  @IsString()
  ProductName: string;


  @IsNotEmpty()
  @IsNumber()
  ProductPrice: number;

  @IsNotEmpty()
  @IsNumber()
  ProductQuantity: number;

  @IsNotEmpty()
  @IsNumber()
  ProductRating: number;
}
