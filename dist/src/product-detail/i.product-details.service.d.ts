import { HistoryTransactionResponse, ProductDetailCreateRequest, ProductDetailCreateResponse, ProductDetailDto, ProductDetailResponse, ProductDetailUpdateRequest, ProductSearchRequest } from './DTO/product-detail.dto';
import { ProductEntity } from '../../entities/product.entity';
import { OrderEntity } from '../../entities/order.entity';
import { Pagination } from '../transaction/DTO/transaction.dto';
export interface IProductDetailService {
    importProductDetail(productDetailCreateRequest: ProductDetailCreateRequest): Promise<ProductDetailCreateResponse>;
    getProductDetail(query: ProductSearchRequest): Promise<ProductDetailResponse>;
    updateProductDetail(id: number, params: ProductDetailUpdateRequest): Promise<ProductDetailDto>;
    removeProductDetail(id: number): Promise<any>;
    saleProduct(product: ProductEntity, quantity: number, order: OrderEntity): Promise<any>;
    getHistoryTransaction(pagination: Pagination): Promise<HistoryTransactionResponse>;
    getProductDetailById(id: number): Promise<ProductDetailDto>;
    checkLiveUid(uid: number): Promise<boolean>;
}
