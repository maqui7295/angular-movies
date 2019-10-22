import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie, MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title = "Movie detail";
  slug: string;
  movie: IMovie;
  constructor(private route: ActivatedRoute, private mvService: MoviesService) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    // this.title = this.slug;
  }

  ngOnInit() {
    this.getOneMovie(this.slug);
  }

  getOneMovie(slug: string): void {
    this.mvService.getAllMovies().subscribe(data => {
      const outcome = data.filter(mv => mv.slug === slug);
      this.movie = outcome && outcome[0];
    });
  }
}
