/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {

  constructor() { }
  // for input data from parent to child
  @Input() movieList :Array<string> =[];
  // for recive action for child to parent
  @Output()
  movieSelectedEventEmitter =  new EventEmitter();
  ngOnInit(): void {

  }
  movieSelected(selectedMovie: string) {
    this.movieSelectedEventEmitter.emit(selectedMovie);
  }

}
