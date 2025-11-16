import { Injectable } from '@nestjs/common';
import { Category } from './dto/category';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class CategoriesService {
    private categories: Category[] = [
        {
            id: uuidv4(),
            title: 'Category 1'
        },
        {
            id: uuidv4(),
            title: 'Category 2'
        },
        {
            id: uuidv4(),
            title: 'Category 3'
        }
    ]

    all(): Category[] {
        return this.categories
    }

    async findOneById(id: string): Promise<Category | undefined> {
        return this.categories.find((category) => category.id === id)
    }
}
