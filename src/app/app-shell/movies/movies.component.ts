import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovie } from './sampleData';
import { FilterSortService } from './sort.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'movies';
  movies: IMovie[];
  filteredMovies: IMovie[];
  sortedMovies: IMovie[];

  // tslint:disable-next-line: variable-name
  _listFilter: string;
  // tslint:disable-next-line: variable-name
  _sortBy: string;
  // tslint:disable-next-line: variable-name
  _actor: string;

  get sortBy(): string {
    return this._sortBy;
  }
  set sortBy(value: string) {
    this._sortBy = value;
    this.filteredMovies = value
      ? this.stService.performSort(value, this.filteredMovies)
      : this.movies;
  }

  get sortByActor(): string {
    return this._actor;
  }
  set sortByActor(value: string) {
    this._actor = value;
    this.filteredMovies = value
      ? this.stService.actorsSort(value, this.filteredMovies)
      : this.movies;
  }
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = value
      ? this.stService.performFilter(value, this.movies)
      : this.movies;
  }
  favoriteMovies: IMovie[] = [];
  constructor(
    private mvService: MoviesService,
    private stService: FilterSortService
  ) {}

  ngOnInit() {
    this.movies = this.filteredMovies = this.mvService.getAllMovies();
    this.favoriteMovies = this.mvService.getFavorites();
  }

  toggleVote(movie: IMovie): any {
    this.mvService.toggleFavorites(movie);
  }

  movieInFavorites(movie: IMovie): boolean {
    return this.mvService.movieInFavorites(movie);
  }
}
