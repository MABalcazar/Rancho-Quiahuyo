import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
export const routes: Routes = [
  {
    path: '',//La ruta '' solamente debe coincidir cuando la URL completa sea exactamente '', es decir, cuando estemos en /.
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];


