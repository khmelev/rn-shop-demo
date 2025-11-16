import { Query, Resolver } from '@nestjs/graphql';

import { Product } from './dto/product';

@Resolver(() => Product)
export class ProductResolver {

}
