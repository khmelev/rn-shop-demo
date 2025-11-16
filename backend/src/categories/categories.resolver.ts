import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Category, CategoryList } from './dto/category';
import { CategoriesService } from './categories.service';

type NullableCategory = Category | undefined

@Resolver(() => Category)
export class CategoriesResolver {
    constructor(
        private readonly categoriesService: CategoriesService,
    ) {}

    @Query(() => CategoryList)
    async categories(): Promise<CategoryList> {
        return {
            categories: this.categoriesService.all()
        }
    }

    @Query(() => Category)
    async category(
        @Args('id', { type: () => ID })
        id: string
    ) {
        return this.categoriesService.findOneById(id)
    }
}
