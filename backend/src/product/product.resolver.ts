import { Query, Resolver } from '@nestjs/graphql';

import { Product, ProductList } from './dto/product';

@Resolver(() => Product)
export class ProductResolver {
    @Query(() => Product)
    async product(): Promise<Product> {
        return {
            sku: "abc123"
        }
    }
    @Query(() => ProductList)
    async products(): Promise<ProductList> {
        return {
            products: [
                {
                    sku: "bcd123"
                },
                {
                    sku: "cdf123"
                },
                {
                    sku: "456asd"
                }
            ]
        }
    }
}
