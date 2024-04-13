import { ICategoryService } from './i.category.service';
import { CategoryCreateRequest, CategorySearchQueryRequest, CategoryUpdateRequest } from "./DTO/category.dto";
export declare class CategoryController {
    private readonly ICategoryService;
    constructor(ICategoryService: ICategoryService);
    GetCategories(): Promise<import("./DTO/category.dto").CategoryResponse>;
    GetCategoriesSearch(body: CategorySearchQueryRequest): Promise<import("./DTO/category.dto").CategoryDto[]>;
    GetCategoriesForClient(): Promise<import("./DTO/category.dto").CategoryResponse>;
    CreateCategory(params: CategoryCreateRequest): Promise<import("./DTO/category.dto").CategoryDto>;
    UpdateCategory(id: number, params: CategoryUpdateRequest): Promise<import("./DTO/category.dto").CategoryDto>;
    GetCategoryById(id: number): Promise<import("./DTO/category.dto").CategoryDto>;
}
