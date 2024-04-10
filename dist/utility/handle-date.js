"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDDMMYYYCurrentDate = exports.getTimeYesterday = void 0;
const getTimeYesterday = () => {
    const currentDate = new Date();
    const startOfToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0);
    const endOfYesterday = new Date(startOfToday.getTime());
    const startOfYesterday = new Date(endOfYesterday);
    startOfYesterday.setDate(endOfYesterday.getDate() - 1);
    startOfYesterday.setHours(0, 0, 0, 0);
    const startOfYesterdayUnixTimestamp = Math.floor(startOfYesterday.getTime() / 1000);
    const endOfYesterdayUnixTimestamp = Math.floor(endOfYesterday.getTime() / 1000);
    const currentUnixTimestamp = Math.floor(currentDate.getTime() / 1000);
    return [
        startOfYesterdayUnixTimestamp,
        endOfYesterdayUnixTimestamp,
        currentUnixTimestamp,
    ];
};
exports.getTimeYesterday = getTimeYesterday;
const getDDMMYYYCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
};
exports.getDDMMYYYCurrentDate = getDDMMYYYCurrentDate;
//# sourceMappingURL=handle-date.js.map