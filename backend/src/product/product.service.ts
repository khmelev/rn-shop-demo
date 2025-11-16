import { Injectable } from '@nestjs/common';
import { mockProducts } from 'src/mocks';
import { Product } from './dto/product';

@Injectable()
export class ProductService {
    private products: Product[] = mockProducts

    async findBySku(sku: String): Promise<Product | undefined> {
        return this.products.find((product) => product.sku === sku)
    }
}
