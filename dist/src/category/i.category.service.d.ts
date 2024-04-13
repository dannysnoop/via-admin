import { CategoryCreateRequest, CategoryDto, CategoryResponse, CategoryUpdateRequest } from './DTO/category.dto';
export interface ICategoryService {
    getAllCategory(): Promise<CategoryResponse>;
    createCategory(params: CategoryCreateRequest): Promise<CategoryDto>;
    updateCategory(id: number, params: CategoryUpdateRequest): Promise<CategoryDto>;
    getCategoryById(id: number): Promise<CategoryDto>;
    getAllCategoryForClient(): Promise<CategoryResponse>;
    searchProductThoughCategory(productName: string): Promise<CategoryDto[]>;
}
