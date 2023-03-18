// This is a TypeScript class called UpdateProductDto that represents an object///
// that contains properties for updating a product///
export class UpdateProductDto {

   // This property represents the ID of the product that will be updated//
    ProductID?: number;

    // This property represents the new name that the product will have after it's updated//
    ProductName?: string;

    // This property represents the new description that the product will have after it's updated--
    ProductDesc?: string;

    // This property represents the new price that the product will have after it's updated//
    ProductPrice?: number;

    // This property represents the new rating that the product will have after it's updated//
    ProductRating?:number;

    // This property represents the new quantity that the product will have after it's updated//
    ProductQuantity?: number;
    
}
/*****************this code defines a TypeScript class called UpdateProductDto that has properties for updating the information of a product,
such as its name, description, price, rating, and quantity. The ? after each property name means that the property is optional,
    meaning that it doesn't have to be included in the object.*/////////////////////    

