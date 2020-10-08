import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies/movies.page';
import { MoviePage } from './movie/movie.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  },
  {
    path: ':maPhim/detail',
    component: MoviePage
  }
];

@NgModule({
  declarations: [MoviesPage, MoviePage],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MovieModule {}
