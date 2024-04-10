"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleText = void 0;
const moment = require("moment");
const handleText = (order) => {
    return `Mã đơn hàng: ${order.id}\nThể loại: ${order.productName}\nSố lương: ${order.quantity}\nThời gian:${moment(+order.createdDate * 1000).format('DD/MM/YYYY hh:mm:ss')}\n`;
};
exports.handleText = handleText;
//# sourceMappingURL=handle-text.js.map