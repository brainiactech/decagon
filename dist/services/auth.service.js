"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const HttpException_1 = require("../exceptions/HttpException");
const users_model_1 = (0, tslib_1.__importDefault)(require("../models/users.model"));
const util_1 = require("../utils/util");
class AuthService {
    constructor() {
        this.users = users_model_1.default;
        this.dataMessage = 'userData is required';
    }
    async signup(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, this.dataMessage);
        const findUser = await this.users.findOne({ email: userData.email });
        if (findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        const createUserData = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async login(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, this.dataMessage);
        const findUser = await this.users.findOne({ email: userData.email });
        if (!findUser)
            throw new HttpException_1.HttpException(409, `email ${userData.email} not found`);
        const isPasswordMatching = await bcrypt_1.default.compare(userData.password, findUser.password);
        if (!isPasswordMatching)
            throw new HttpException_1.HttpException(409, `password doesn't match`);
        const tokenData = this.createToken(findUser);
        return { tokenData, findUser };
    }
    createToken(user) {
        const dataStoredInToken = { _id: user._id };
        const secretKey = config_1.default.get('secretKey');
        const expiresIn = parseInt(process.env.EXPIRES_IN);
        return { expiresIn, token: jsonwebtoken_1.default.sign(dataStoredInToken, secretKey, { expiresIn }) };
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map