import { ObjectType, Field } from "@nestjs/graphql";
import { Product } from "src/product/dto/product";

@ObjectType()
export class ProductList {
    @Field(() => [Product])
    products: Product[]
}