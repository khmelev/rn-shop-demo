import { Injectable } from '@nestjs/common';
import { Category } from './dto/category';
import { mockCategories } from 'src/mocks';

@Injectable()
export class CategoriesService {
    private categories: Category[] = mockCategories

    all(): Category[] {
        return this.categories
    }

    async findOneById(id: string): Promise<Category | undefined> {
        return this.categories.find((category) => category.id === id)
    }
}
