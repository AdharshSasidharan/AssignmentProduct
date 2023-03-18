//an entity class named "Products" using TypeORM, which represents a table in a database//

// Import the required decorators from TypeORM//////////
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Define the entity class and specify the table name as "Products"/////////-------
@Entity({name:'Products'})
export class Products {

// Define the primary key column with auto-incrementing numbers////---------
@PrimaryGeneratedColumn()
ProductID: number;

// Define a column for the product name///----
@Column()
ProductName: string;

// Define a column for the product description-------
@Column()
ProductDesc: string;

// Define a column for the product price with a number-------
@Column()
ProductPrice: number;

// Define a column for the product rating with a number-------
@Column()
ProductRating: number;

// Define a column for the product quantity-----------
@Column()
ProductQuantity: number;

// Define a column for the creation timestamp with a default value of the current timestamp----------
@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
createdAt: Date;

// Define a column for the update timestamp with a default value of the current timestamp-----------
@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
updatedAt: Date;
}

/*Overall, this defines a table schema for a database table named "Products" with columns for product ID, 
name, description, price, rating, quantity, creation timestamp, and update timestamp*/
