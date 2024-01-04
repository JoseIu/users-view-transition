import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    children: [
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () =>
          import('./users/pages/users-list/users-list.component').then(
            (m) => m.UsersListComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User view',
        loadComponent: () =>
          import('./users/pages/user-info/user-info.component').then(
            (m) => m.UserInfoComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'users-list',
      },
    ],
  },
];
