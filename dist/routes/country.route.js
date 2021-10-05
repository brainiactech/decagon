"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const country_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/country.controller"));
const country_dto_1 = require("../dtos/country.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("../middlewares/validation.middleware"));
const auth_middleware_1 = (0, tslib_1.__importDefault)(require("../middlewares/auth.middleware"));
const rate_limiter_middleware_1 = (0, tslib_1.__importDefault)(require("../middlewares/rate-limiter.middleware"));
class CountryRoute {
    constructor() {
        this.path = '/country';
        this.router = (0, express_1.Router)();
        this.countryController = new country_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, [(0, validation_middleware_1.default)(country_dto_1.SearchCountryDto, 'body'), auth_middleware_1.default, rate_limiter_middleware_1.default], this.countryController.searchCountry, this.router.post(`${this.path}/filter`, [(0, validation_middleware_1.default)(country_dto_1.SearchCountryDto, 'body'), auth_middleware_1.default, rate_limiter_middleware_1.default], this.countryController.searchCountryByFilter));
    }
}
exports.default = CountryRoute;
//# sourceMappingURL=country.route.js.map