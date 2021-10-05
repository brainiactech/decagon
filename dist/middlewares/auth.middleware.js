"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const HttpException_1 = require("../exceptions/HttpException");
const users_model_1 = (0, tslib_1.__importDefault)(require("../models/users.model"));
const authMiddleware = async (req, res, next) => {
    try {
        const Authorization = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;
        if (Authorization) {
            const secretKey = config_1.default.get('secretKey');
            console.log('===========================================Authorization');
            console.log(Authorization);
            console.log('===========================================Authorization');
            const verificationResponse = (await jsonwebtoken_1.default.verify(Authorization, secretKey));
            console.log('===========================================verificationResponse');
            console.log(verificationResponse);
            console.log('===========================================verificationResponse');
            const userId = verificationResponse._id;
            const findUser = await users_model_1.default.findById(userId);
            if (findUser) {
                req.user = findUser;
                next();
            }
            else {
                next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
            }
        }
        else {
            next(new HttpException_1.HttpException(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map