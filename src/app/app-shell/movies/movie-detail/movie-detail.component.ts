import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { IMovie } from '../sampleData';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title = 'Movie detail';
  slug: string;
  movie: IMovie;
  rating;
  constructor(private route: ActivatedRoute, private mvService: MoviesService) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit() {
    this.movie = this.mvService.getOneMovie(this.slug);
    this.rating = Array(this.movie.rated);
  }
}
