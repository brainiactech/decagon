import { SearchCountryDto } from '../dtos/country.dto';
import { Country } from '../interfaces/country.interface';
declare class CountryService {
    searchCountry(countryData: SearchCountryDto): Promise<Country>;
    searchCountryByFilter(countryData: SearchCountryDto): Promise<Country>;
}
export default CountryService;
