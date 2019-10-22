import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';;
import { MoviesFavoriteComponent } from './movies-favorite/movies-favorite.component'

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent, MoviesFavoriteComponent],
  imports: [CommonModule, FormsModule, MoviesRoutingModule]
})
export class MoviesModule {}
