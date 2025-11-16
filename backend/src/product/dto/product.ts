import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/categories/dto/category';

@ObjectType()
export class Product {
    @Field(() => String)
    sku: string;

    @Field(() => String)
    name: string;
    
    @Field(() => Category)
    category: Category
}