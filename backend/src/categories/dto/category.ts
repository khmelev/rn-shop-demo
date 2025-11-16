import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Category {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;
}

@ObjectType()
export class CategoryList {
    @Field(() => [Category])
    categories: Category[]
}