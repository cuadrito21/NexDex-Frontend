import { Routes } from '@angular/router';
import { Home } from './component/pages/public/home/home';
import { Login } from './component/pages/public/login/login';
import { Registrer } from './component/pages/public/registrer/registrer';
import { Offers } from './pages/private/offers/offers';
import { User } from './pages/private/user/user';
import { UserNewForm } from './pages/private/new-form/new-form';


export const routes: Routes = [
    {path: "home", component: Home },
    {path: "login", component: Login },
    {path: "registrer", component: Registrer },
    {path: "dashboard/user", component: User},
    {path: "dashboard/user/new-form", component: UserNewForm},
    {path: "dashboard/offers", component: Offers },
    {path: "**", redirectTo: "home", pathMatch: "full" },
    {path: "", redirectTo: "home", pathMatch: "full" }
];
