import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '',
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./user/user.module').then(mod => mod.UserModule)
      },

      {
        path: 'movies',
        loadChildren: () =>
          import('./movie/movie.module').then(mod => mod.MovieModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
