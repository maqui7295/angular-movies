import { Injectable } from '@angular/core';
import { IMovie } from './sampleData';

@Injectable({
  providedIn: 'root'
})
export class FilterSortService {

  performSort(value: any, arr: IMovie[]): IMovie[] {
    // tslint:disable-next-line: no-unused-expression
    if (value.startsWith('year')) {
      return this.sortYear(value, arr);
    }
    if (value.startsWith('rating')) {
      return this.sortRating(value, arr);
    }
    return arr;
  }
  sortRating(value, arr: IMovie[]): IMovie[] {
    return arr.sort((a: IMovie, b: IMovie) => {
      if (value.endsWith('asc')) {
        return a.rated - b.rated;
      }
      return b.rated - a.rated;
    });
  }
  sortYear(value, arr: IMovie[]): IMovie[] {
    return arr.sort((a: IMovie, b: IMovie) => {
      if (value.endsWith('asc')) {
        return a.date.getTime() - b.date.getTime();
      }
      return b.date.getTime() - a.date.getTime();
    });
  }

  performFilter(filterBy: string, movies: IMovie[]): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return movies.filter((movie: IMovie) =>
      movie.title.toLocaleLowerCase().includes(filterBy)
    );
  }

  actorsSort(actor: string, movies: IMovie[]): IMovie[] {
    return movies.filter((movie: IMovie) => movie.actors.includes(actor));
  }

}
