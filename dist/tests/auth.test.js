"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const supertest_1 = (0, tslib_1.__importDefault)(require("supertest"));
const app_1 = (0, tslib_1.__importDefault)(require("../app"));
const auth_route_1 = (0, tslib_1.__importDefault)(require("../routes/auth.route"));
afterAll(async () => {
    await mongoose_1.default.disconnect();
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Auth', () => {
    describe('[POST] /signup', () => {
        it('response should have the Create userData', async () => {
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!',
            };
            const authRoute = new auth_route_1.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            mongoose_1.default.connect = jest.fn();
            const app = new app_1.default([authRoute]);
            return (0, supertest_1.default)(app.getServer()).post(`${authRoute.path}signup`).send(userData);
        });
    });
    describe('[POST] /login', () => {
        it('login Authorization', async () => {
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!',
            };
            const authRoute = new auth_route_1.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            mongoose_1.default.connect = jest.fn();
            const app = new app_1.default([authRoute]);
            return (0, supertest_1.default)(app.getServer()).post(`${authRoute.path}login`).send(userData);
        });
    });
});
//# sourceMappingURL=auth.test.js.map