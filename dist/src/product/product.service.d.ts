import { ProductRepository } from './product.repository';
import { IProductService } from './i.product.service';
import { ProductResponse, ProductQueryRequest, ProductCreateRequest } from './DTO/product.dto';
import { ProductEntity } from '../../entities/product.entity';
import { CategoryRepository } from '../category/category.repository';
import { ProductDetailRepository } from '../product-detail/product-detail.repository';
export declare class ProductService implements IProductService {
    private readonly repository;
    private readonly categoryRepository;
    private readonly productDetailRepository;
    constructor(repository: ProductRepository, categoryRepository: CategoryRepository, productDetailRepository: ProductDetailRepository);
    getAllProduct(): Promise<ProductResponse>;
    createProduct(params: ProductCreateRequest): Promise<ProductEntity>;
    updateProduct(id: number, params: ProductCreateRequest): Promise<ProductEntity>;
    getProductByCategoryIdAndProductName(query: ProductQueryRequest): Promise<ProductResponse>;
    getProductById(id: number): Promise<ProductEntity>;
    exportProductDetail(id: number): Promise<any>;
}
