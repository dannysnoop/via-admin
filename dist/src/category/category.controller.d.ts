import { ICategoryService } from './i.category.service';
import { CategoryCreateRequest, CategoryDto, CategoryUpdateRequest } from "./DTO/category.dto";
export declare class CategoryController {
    private readonly ICategoryService;
    constructor(ICategoryService: ICategoryService);
    GetCategories(): Promise<import("./DTO/category.dto").CategoryResponse>;
    GetCategoriesForClient(): Promise<import("./DTO/category.dto").CategoryResponse>;
    CreateCategory(params: CategoryCreateRequest): Promise<CategoryDto>;
    UpdateCategory(id: number, params: CategoryUpdateRequest): Promise<CategoryDto>;
    GetCategoryById(id: number): Promise<CategoryDto>;
}
