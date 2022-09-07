/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  Movies = ["Intersteller", "the Dark Night","3 Idiot", "Raees"]
  constructor() { }
  addedMoive:Array<string> = [];
  ngOnInit(): void {
  }
  selectedMovieToWatch(data: string) {
    this.addedMoive.push(data);
    // alert(data);
  }
}
