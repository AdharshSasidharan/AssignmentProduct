/**
 * Data transfer object for creating a new product.
 * Contains the necessary fields for creating a product record in the database.
 */
export class CreateProductDto {

  // The unique ID of the product.
  ProductID: number;

  // The name of the product.
  ProductName: string;

  // The price of the product.
  ProductPrice: number;

  // The quantity of the product available.
  ProductQuantity: number;

  // The rating of the product, on a scale from 1 to 10.
  ProductRating: number;
}

