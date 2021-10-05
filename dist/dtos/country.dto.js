"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCountryDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class SearchCountryDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCountryDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsBoolean)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SearchCountryDto.prototype, "isFullText", void 0);
exports.SearchCountryDto = SearchCountryDto;
//# sourceMappingURL=country.dto.js.map