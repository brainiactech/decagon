"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ioredis_1 = (0, tslib_1.__importDefault)(require("ioredis"));
const seconds = 60;
const checkRateLimiting = async (token, limit, errorCallback) => {
    const redisClient = new ioredis_1.default();
    if (token) {
        const minute = new Date().getMinutes();
        const key = `${token}-${minute}`;
        const data = await redisClient.get(key);
        if (data >= limit) {
            const timeLeft = await redisClient.ttl(key);
            return errorCallback(timeLeft);
        }
        redisClient.multi().incr(key).expire(key, seconds).exec();
    }
    return true;
};
exports.default = checkRateLimiting;
//# sourceMappingURL=checkRateLimiting.js.map