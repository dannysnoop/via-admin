import { ITransactionService } from '../src/transaction/i.transaction.service';
export declare function emailAndPasswordImap({ user, password }: {
    user: any;
    password: any;
}, service: ITransactionService, SyntaxTransfer?: string): Promise<void>;
