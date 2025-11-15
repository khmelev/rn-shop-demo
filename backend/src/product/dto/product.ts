import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
    @Field(() => String)
    sku: string;
}

@ObjectType()
export class ProductList {
    @Field(() => [Product])
    products: Product[]
}