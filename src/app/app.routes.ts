import { Routes } from '@angular/router';
import { Home } from './component/pages/public/home/home';
import { Login } from './component/pages/public/login/login';
import { Registrer } from './component/pages/public/registrer/registrer';
import { DeveloperProfile } from './pages/private/developer-profile/developer-profile';
import { Offers } from './pages/private/offers/offers';

export const routes: Routes = [
    {path: "home", component: Home },
    {path: "login", component: Login },
    {path: "registrer", component: Registrer },
    {path: "dashboard/developerProfile", component: DeveloperProfile },
    {path: "dashboard/company", component: Offers },
    {path: "dashboard/about", component: Offers },
    {path: "**", redirectTo: "home", pathMatch: "full" },
    {path: "", redirectTo: "home", pathMatch: "full" }
];
