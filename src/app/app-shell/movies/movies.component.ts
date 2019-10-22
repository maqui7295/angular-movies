import { Component, OnInit } from '@angular/core';
import { MoviesService, IMovie } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'movies';
  movies: IMovie[];
  filteredMovies: IMovie[];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.movies;
  }
  favoriteMovies: IMovie[] = [];
  constructor(private mvService: MoviesService) {}

  ngOnInit() {
    // this.movies = this.filteredMovies =  this.mvService.getAllMovies().subscribe(data => this.movies = data);
    this.mvService.getAllMovies().subscribe(data => this.movies = this.filteredMovies = data);
    this.favoriteMovies = this.mvService.getFavorites();
  }

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.title.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleVote(movie: IMovie): any {
    this.mvService.toggleFavorites(movie);
  }

  movieInFavorites(movie: IMovie): boolean {
    return this.mvService.movieInFavorites(movie);
  }
}
