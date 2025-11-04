import { Query, Resolver } from '@nestjs/graphql';

import { Product } from './dto/product';

@Resolver(() => Product)
export class ProductResolver {
    @Query((returns) => Product)
    async product(): Promise<Product> {
        return {
            sku: "abc123"
        }
    }
}
