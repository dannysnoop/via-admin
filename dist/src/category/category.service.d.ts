import { ICategoryService } from './i.category.service';
import { CategoryResponse, CategoryDto, CategoryCreateRequest, CategoryUpdateRequest } from './DTO/category.dto';
import { CategoryRepository } from './category.repository';
export declare class CategoryService implements ICategoryService {
    private repository;
    constructor(repository: CategoryRepository);
    getCategoryById(id: any): Promise<CategoryDto>;
    getAllCategory(): Promise<CategoryResponse>;
    getAllCategoryForClient(): Promise<CategoryResponse>;
    createCategory(params: CategoryCreateRequest): Promise<CategoryDto>;
    updateCategory(id: number, params: CategoryUpdateRequest): Promise<CategoryDto>;
}
