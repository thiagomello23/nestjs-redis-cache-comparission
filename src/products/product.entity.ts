import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column("decimal", { precision: 10, scale: 2 })
    price: number;
  
    @Column({ type: "text"})
    description: string;
  
    @Column({ default: true })
    isActive: boolean;
}