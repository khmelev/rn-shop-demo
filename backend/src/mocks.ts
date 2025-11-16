import { Category } from "./categories/dto/category";
import {v4 as uuidv4} from 'uuid';
import { Product } from "./product/dto/product";

export const mockCategories: Category[] = [
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

const category1 = mockCategories[0]
const category2 = mockCategories[1]

export const mockProducts: Product[] = [
    {
        sku: 'sku123',
        name: 'Shoes',
        category: category1
    },
    {
        sku: 'sku234',
        name: 'Boots',
        category: category1
    },
    {
        sku: 'sku345',
        name: 'Top hills',
        category: category2
    },
    {
        sku: 'sku456',
        name: 'Wellingtons',
        category: category2
    }
]