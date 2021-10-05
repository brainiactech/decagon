"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const country_service_1 = (0, tslib_1.__importDefault)(require("../services/country.service"));
class CountryController {
    constructor() {
        this.countryService = new country_service_1.default();
        this.searchCountry = async (req, res, next) => {
            try {
                const countryData = req.body;
                const findCountry = await this.countryService.searchCountry(countryData);
                res.status(200).json({ data: findCountry, message: 'country search successfully' });
            }
            catch (error) {
                next(error);
            }
        };
        this.searchCountryByFilter = async (req, res, next) => {
            try {
                const countryData = req.body;
                const findCountry = await this.countryService.searchCountryByFilter(countryData);
                res.status(200).json({ data: findCountry, message: 'country search successfully' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = CountryController;
//# sourceMappingURL=country.controller.js.map