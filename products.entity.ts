import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'Products'})
export class Products {
  @PrimaryGeneratedColumn()
  ProductID: number;

  @Column()
  ProductName: string;

  @Column()
  ProductDesc: string;

  @Column()
  ProductPrice: number;
  
  @Column()
  ProductRating: number;

  @Column()
  ProductQuantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}


