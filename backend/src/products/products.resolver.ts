import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { ProductList } from './dto/products';
import { Product } from 'src/product/dto/product';
import { ProductService } from 'src/product/product.service';
import { CategoriesService } from 'src/categories/categories.service';

@Resolver(() => ProductList)
export class ProductsResolver {
    constructor(
        private productsService: ProductsService,
        private productService: ProductService,
        private categoriesService: CategoriesService,
    ){}

    @Query(() => ProductList)
    async products(): Promise<ProductList> {
        return {
            products: this.productsService.all()
        }
    }

    @Query(() => ProductList)
    async productsWithCategory(
        @Args('categoryId', { type: () => String })
        categoryId: string
    ): Promise<ProductList> {
        const category = await this.categoriesService.findOneById(categoryId)
        return {
            products: this.productsService.filterByCategory(category)
        }
    }

    @Query(() => Product)
    async findBySku(
        @Args('sku', { type: () => String })
        sku: string
    ) {
        return this.productService.findBySku(sku)
    }

}
