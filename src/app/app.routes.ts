import { Routes } from '@angular/router';
import { Home } from './component/pages/public/home/home';
import { Login } from './component/pages/public/login/login';
import { Registrer } from './component/pages/public/registrer/registrer';
<<<<<<< HEAD
import { DeveloperProfile } from './pages/private/developer-profile/developer-profile';
=======
import { Offers } from './pages/private/offers/offers';
>>>>>>> 26bf9e7b9c51e9d495fc774d21a6cbe308b63d28

export const routes: Routes = [
    {path: "home", component: Home },
    {path: "login", component: Login },
    {path: "registrer", component: Registrer },
<<<<<<< HEAD
    {path: "dashboard/developerProfile", component: DeveloperProfile },
=======
    {path: "dashboard/offers", component: Offers },
>>>>>>> 26bf9e7b9c51e9d495fc774d21a6cbe308b63d28
    {path: "**", redirectTo: "home", pathMatch: "full" },
    {path: "", redirectTo: "home", pathMatch: "full" }
];
