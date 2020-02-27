import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import getMovies, { IMovie, getActors } from './sampleData';
// import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

// environment
const store = localStorage;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  title = 'movies';
  private movies: IMovie[] = getMovies();
  private moviesUrl = environment.endpoint.movies;
  private favoriteMovies: IMovie[] = [];

  public actors = getActors();

  private favSubjects$ = new BehaviorSubject<IMovie[]>(this.favoriteMovies);
  favSubjectsChanged$ = this.favSubjects$.asObservable();

  constructor(private toastr: ToastrService) {
    this.favoriteMovies =
      this.getFavoritesFromSession() !== null
        ? this.getFavoritesFromSession()
        : [];
    this.favSubjects$.next(this.favoriteMovies);
  }

  getAllMovies(): IMovie[] {
    return this.movies;
  }

  getOneMovie(slug: string): IMovie {
    return this.movies.filter(mv => mv.slug === slug)[0];
  }

  addToFavorites(movie: IMovie): void {
    this.favoriteMovies.push(movie);
    this.addToSession();
    this.favSubjects$.next(this.favoriteMovies);
    this.toastr.success(
      'Movie added',
      `You added "${movie.title}" to favorites`
    );
  }

  removeFromFavorites(movie: IMovie): void {
    const i = this.favoriteMovies.findIndex(m => m.title === movie.title);
    if (i !== -1) {
      this.favoriteMovies.splice(i, 1);
      this.addToSession();
    }
    this.favSubjects$.next(this.favoriteMovies);
    this.toastr.warning(
      'Movie removed',
      `You removed "${movie.title}" from favorites`
    );
  }

  addToSession(): void {
    store.setItem(this.title, JSON.stringify(this.favoriteMovies));
  }

  movieInFavorites(movie: IMovie): boolean {
    const m =
      this.favoriteMovies &&
      this.favoriteMovies.filter(mv => mv.title === movie.title);
    return m.length !== 0;
  }

  toggleFavorites(movie: IMovie): void {
    const movieExists: boolean = this.movieInFavorites(movie);
    if (movieExists) {
      this.removeFromFavorites(movie);
    } else {
      this.addToFavorites(movie);
    }
  }

  getFavoritesFromSession(): null | IMovie[] {
    const movies: null | string = store.getItem(this.title);
    if (movies !== null) {
      return JSON.parse(movies);
    } else {
      return null;
    }
  }
  getFavorites(): null | IMovie[] {
    return this.favoriteMovies;
  }
}
