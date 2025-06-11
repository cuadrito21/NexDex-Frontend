import { Routes } from '@angular/router';
import { Home } from './component/pages/public/home/home';
import { Login } from './component/pages/public/login/login';
import { Registrer } from './component/pages/public/registrer/registrer';

export const routes: Routes = [
    {path: "home", component: Home },
    {path: "login", component: Login },
    {path: "registrer", component: Registrer },
    {path: "**", redirectTo: "home", pathMatch: "full" },
    {path: "", redirectTo: "home", pathMatch: "full" }
];
