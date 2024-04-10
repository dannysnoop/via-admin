"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const user_entity_1 = require("../entities/user.entity");
const transactions_entity_1 = require("../entities/transactions.entity");
const order_entity_1 = require("../entities/order.entity");
const product_entity_1 = require("../entities/product.entity");
const categories_entity_1 = require("../entities/categories.entity");
const product_detail_entity_1 = require("../entities/product-detail.entity");
const ticket_entity_1 = require("../entities/ticket.entity");
const post_entity_1 = require("../entities/post.entity");
const config_entity_1 = require("../entities/config.entity");
const history_transaction_entity_1 = require("../entities/history-transaction.entity");
require('dotenv').config();
exports.dbConfig = {
    type: 'postgres',
    host: process.env.DB_URL,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
        user_entity_1.UserEntity,
        transactions_entity_1.TransactionsEntity,
        order_entity_1.OrderEntity,
        product_entity_1.ProductEntity,
        categories_entity_1.CategoriesEntity,
        product_detail_entity_1.ProductDetailEntity,
        ticket_entity_1.TicketEntity,
        post_entity_1.PostEntity,
        config_entity_1.ConfigEntity,
        history_transaction_entity_1.HistoryTransactionEntity
    ],
    synchronize: !!+process.env.DB_SYNC,
};
//# sourceMappingURL=db-config.js.map