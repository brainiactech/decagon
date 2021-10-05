import CountryController from '../controllers/country.controller';
import { Routes } from '../interfaces/routes.interface';
declare class CountryRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    countryController: CountryController;
    constructor();
    private initializeRoutes;
}
export default CountryRoute;
