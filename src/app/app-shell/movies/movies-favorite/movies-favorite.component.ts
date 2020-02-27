import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IMovie } from '../sampleData';

@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.css']
})
export class MoviesFavoriteComponent implements OnInit {
  title = 'favorite movies';
  public favoriteMovies: IMovie[] = [];
  constructor(private mvService: MoviesService) {}

  ngOnInit() {
    this.favoriteMovies = this.mvService.getFavorites();
  }

  movieInFavorites(movie: IMovie): boolean {
    return this.mvService.movieInFavorites(movie);
  }

  toggleVote(movie: IMovie): any {
    this.mvService.toggleFavorites(movie);
  }
}
