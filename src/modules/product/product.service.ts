// src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Get all products
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Get a product by ID
  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }
}
