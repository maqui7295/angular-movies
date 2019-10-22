import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';

// environment

export interface IMovie {
  title: string;
  slug?: string;
  imageUrl?: string;
  date: string;
  short_description?: string;
  description: string;
  rated?: number;
  released?: string;
  runtime?: string;
  genre?: string;
  director?: string;
  writer?: string;
  actors?: string[];
  plot?: string;
  language?: string;
  country?: string;
  awards?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  title = 'movies';
  private movies: Observable<IMovie[]>;
  private moviesUrl = environment.endpoint.movies;
  private favoriteMovies: IMovie[] = [];

  constructor(private http: HttpClient) {
    this.favoriteMovies =
      this.getFavoritesFromSession() !== null
        ? this.getFavoritesFromSession()
        : [];
  }

  getAllMovies(): Observable<IMovie[]> {
    this.movies = this.http.get<IMovie[]>(this.moviesUrl);
    return this.movies;
  }

  getOneMovie(title: string): IMovie {
    let movie: IMovie;
    this.movies.subscribe(data => {
      const outcome = data.filter(mv => mv.title === title);
      movie = outcome && outcome[0];
    });
    console.log(movie);
    return movie;
  }

  addToFavorites(movie: IMovie): void {
    this.favoriteMovies.push(movie);
    this.addToSession();
  }

  removeFromFavorites(movie: IMovie): void {
    const i = this.favoriteMovies.findIndex(m => m.title === movie.title);
    if (i !== -1) {
      this.favoriteMovies.splice(i, 1);
      this.addToSession();
    }
  }

  addToSession(): void {
    sessionStorage.setItem(this.title, JSON.stringify(this.favoriteMovies));
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
    const movies: null | string = sessionStorage.getItem(this.title);
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

// export class ListService {
//   private listUrl = environment.endpoint.list;

//   constructor(private http: HttpClient) { }

//   getListItems(): Observable<IListItem[]> {
//     return this.http.get<IListItem[]>(this.listUrl);
//   }

//   addListItem(inputText: string): Observable<IListItem> {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
//     const body = JSON.stringify({
//       text: inputText
//     });
//     return this.http.post<IListItem>(this.listUrl, body, httpOptions);
//   }

//   deleteListItem(id: number): Observable<IListItem> {
//     return this.http.delete<IListItem>(`${environment.endpoint.list}/${id}`);
//   }
// }
