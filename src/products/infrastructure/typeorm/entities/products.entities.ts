import { ProductModel } from '@/products/domain/models/products.model'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('products')
export class Product implements ProductModel {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column('varchar')
  name: string
  @Column('decimal')
  price: number
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
