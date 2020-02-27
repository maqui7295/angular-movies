import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  skipLinkPath: string;
  moviesLength: number;
  constructor(private location: Location, private mvS: MoviesService) { }

  ngOnInit() {
    this.skipLinkPath = `${this.location.path()}#mainContent`;
    this.mvS.favSubjectsChanged$.subscribe(data => this.moviesLength = data.length);
  }
}
