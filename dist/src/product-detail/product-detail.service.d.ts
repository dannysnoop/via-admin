import { IProductDetailService } from './i.product-details.service';
import { ProductDetailCreateRequest, ProductDetailCreateResponse, ProductSearchRequest, ProductDetailUpdateRequest, ProductDetailDto, ProductDetailResponse, HistoryTransactionResponse } from './DTO/product-detail.dto';
import { ProductDetailRepository } from './product-detail.repository';
import { IProductService } from '../product/i.product.service';
import { Repository } from 'typeorm';
import { ProductEntity } from 'entities/product.entity';
import { OrderEntity } from '../../entities/order.entity';
import { HistoryTransactionEntity } from '../../entities/history-transaction.entity';
import { Pagination } from 'src/transaction/DTO/transaction.dto';
export declare class ProductDetailService implements IProductDetailService {
    private readonly repository;
    private readonly IProductService;
    private historyTransactionEntityRepository;
    constructor(repository: ProductDetailRepository, IProductService: IProductService, historyTransactionEntityRepository: Repository<HistoryTransactionEntity>);
    checkLiveUid(uid: number): Promise<boolean>;
    getProductDetailById(id: number): Promise<ProductDetailDto>;
    getHistoryTransaction(pagination: Pagination): Promise<HistoryTransactionResponse>;
    saleProduct: (product: ProductEntity, quantity: number, order: OrderEntity) => Promise<void>;
    importProductDetail(productDetailCreateRequest: ProductDetailCreateRequest): Promise<ProductDetailCreateResponse>;
    getProductDetail(query: ProductSearchRequest): Promise<ProductDetailResponse>;
    updateProductDetail(id: number, params: ProductDetailUpdateRequest): Promise<ProductDetailDto>;
    removeProductDetail(id: number): Promise<any>;
}
