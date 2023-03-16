import { IsOptional,IsString,IsNumber} from "class-validator";

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    ProductID?: number;

    @IsOptional()
    @IsString()
    ProductName?: string;
    
    @IsOptional()
    @IsString()
    ProductDesc?: string;

    @IsOptional()
    @IsNumber()
    ProductPrice?: number;

 

    @IsOptional()
    @IsNumber()
    ProductRating?:number;

    @IsOptional()
    @IsNumber()
    ProductQuantity?: number;




    
    }
