"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserActiveStatus = void 0;
const axios = require('axios');
const cheerio = require('cheerio');
async function checkUserActiveStatus(userId) {
    try {
        const response = await axios.get(`https://graph.facebook.com/${userId}/picture?type=normal`);
        return (response.request.res.responseUrl !==
            'https://static.xx.fbcdn.net/rsrc.php/v1/yh/r/C5yt7Cqf3zU.jpg');
    }
    catch (error) {
        if (error.response && error.response.status === 404) {
            return false;
        }
        else {
            console.error('Error checking user existence:', error);
            return null;
        }
    }
}
exports.checkUserActiveStatus = checkUserActiveStatus;
//# sourceMappingURL=check-live-uid.js.map