import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/dto/category';
import { mockProducts } from 'src/mocks';
import { Product } from 'src/product/dto/product';

@Injectable()
export class ProductsService {

    private products: Product[] = mockProducts

    all(): Product[] {
        return this.products
    }

    filterByCategory(category?: Category): Product[] {
        return this.products.filter((product) => product.category === category)
    }
}
