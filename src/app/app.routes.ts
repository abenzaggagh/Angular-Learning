import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: ':id', loadComponent: () => import('./components/users-details/users-details.component')
    .then(c => c.UsersDetailsComponent)
}];
