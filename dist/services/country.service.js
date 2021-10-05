"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const util_1 = require("../utils/util");
const axiosRequest_1 = (0, tslib_1.__importDefault)(require("../utils/axiosRequest"));
const allCountries_1 = require("../utils/allCountries");
class CountryService {
    async searchCountry(countryData) {
        if ((0, util_1.isEmpty)(countryData))
            throw new HttpException_1.HttpException(400, 'name is required');
        const response = await (0, axiosRequest_1.default)(countryData.name, countryData.isFullText);
        console.log('================================response');
        console.log(response);
        console.log('================================response');
        return { callingCodes: response.callingCodes, region: response.region, name: response.name };
    }
    async searchCountryByFilter(countryData) {
        if ((0, util_1.isEmpty)(countryData))
            throw new HttpException_1.HttpException(400, 'countryData is required');
        const response = allCountries_1.allCountries
            .filter(item => {
            const itemLowerCased = item.name.toLowerCase();
            return itemLowerCased.includes(countryData.name.toLowerCase());
        })
            .map(data => {
            return {
                name: data.name,
                region: data.region,
                callingCodes: data.callingCodes,
            };
        });
        return {
            callingCodes: response.length > 0 ? response[0].callingCodes : [],
            region: response.length > 0 ? response[0].region : '',
            name: response.length > 0 ? response[0].name : '',
        };
    }
}
exports.default = CountryService;
//# sourceMappingURL=country.service.js.map