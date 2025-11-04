import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
    @Field((type) => String)
    sku: string;
}