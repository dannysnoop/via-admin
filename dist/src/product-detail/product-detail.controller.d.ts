import { IProductDetailService } from './i.product-details.service';
import { ProductDetailCreateRequest, ProductDetailUpdateRequest, ProductSearchRequest } from './DTO/product-detail.dto';
import { Pagination } from '../transaction/DTO/transaction.dto';
export declare class ProductDetailController {
    private readonly IProductDetailService;
    constructor(IProductDetailService: IProductDetailService);
    importExcelProductDetail(params: ProductDetailCreateRequest): Promise<import("./DTO/product-detail.dto").ProductDetailCreateResponse>;
    getProductDetail(params: ProductSearchRequest): Promise<import("./DTO/product-detail.dto").ProductDetailResponse>;
    getHistoryTransaction(params: Pagination): Promise<import("./DTO/product-detail.dto").HistoryTransactionResponse>;
    getProductDetailById(id: number): Promise<import("./DTO/product-detail.dto").ProductDetailDto>;
    updateProductDetail(id: number, params: ProductDetailUpdateRequest): Promise<import("./DTO/product-detail.dto").ProductDetailDto>;
    removeProductDetail(id: number): Promise<any>;
}
