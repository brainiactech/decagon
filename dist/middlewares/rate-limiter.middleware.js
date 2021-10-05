"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const checkRateLimiting_1 = (0, tslib_1.__importDefault)(require("../utils/checkRateLimiting"));
const HttpException_1 = require("../exceptions/HttpException");
const rateLimiterMiddleware = async (req, res, next) => {
    const Authorization = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;
    console.log(Authorization);
    await (0, checkRateLimiting_1.default)(Authorization, parseInt(process.env.Rate_Limit) || 30, (timeLeftInSecs) => {
        const toMinutes = Math.round(timeLeftInSecs / 60);
        next(new HttpException_1.HttpException(400, `Too many requests, please try again in the next ${toMinutes} minute(s)`));
    });
    next();
};
exports.default = rateLimiterMiddleware;
//# sourceMappingURL=rate-limiter.middleware.js.map