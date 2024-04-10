import { IProductService } from './i.product.service';
import { ProductCreateRequest, ProductQueryRequest, ProductUpdateRequest } from './DTO/product.dto';
export declare class ProductController {
    private readonly IProductService;
    constructor(IProductService: IProductService);
    exportTxtFileDetailProduct(id: number, res: any): Promise<void>;
    getProductForClient(query: ProductQueryRequest): Promise<import("./DTO/product.dto").ProductResponse>;
    getAllProduct(): Promise<import("./DTO/product.dto").ProductResponse>;
    getProductById(id: number): Promise<import("../../entities/product.entity").ProductEntity>;
    createProduct(params: ProductCreateRequest): Promise<import("../../entities/product.entity").ProductEntity>;
    updateProduct(id: number, params: ProductUpdateRequest): Promise<import("../../entities/product.entity").ProductEntity>;
}
