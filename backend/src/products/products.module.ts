import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { ProductService } from 'src/product/product.service';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  providers: [ProductsResolver, ProductsService, ProductService, CategoriesService]
})
export class ProductsModule {}
