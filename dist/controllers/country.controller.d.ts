import { NextFunction, Request, Response } from 'express';
import CountryService from '../services/country.service';
declare class CountryController {
    countryService: CountryService;
    searchCountry: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    searchCountryByFilter: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default CountryController;
