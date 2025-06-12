import { Routes } from '@angular/router';
import { Home } from './component/pages/public/home/home';
import { Login } from './component/pages/public/login/login';
import { Registrer } from './component/pages/public/registrer/registrer';
import { Offers } from './pages/private/offers/offers';
import { CompanyProfile } from './pages/private/company-profile/company-profile';

export const routes: Routes = [
    {path: "home", component: Home },
    {path: "login", component: Login },
    {path: "registrer", component: Registrer },
    {path: "dashboard/companyProfile", component: CompanyProfile},
    {path: "dashboard/offers", component: Offers },
    {path: "**", redirectTo: "home", pathMatch: "full" },
    {path: "", redirectTo: "home", pathMatch: "full" }
];
