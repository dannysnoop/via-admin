import { BaseEntity } from './base.entity';
export declare class PostEntity extends BaseEntity {
    id: number;
    title: string;
    content: string;
    isShow: boolean;
    isShowTop: boolean;
    isRequiredBalanceForLookUp: boolean;
    isRequiredForComment: boolean;
    priceRequired: number;
}
