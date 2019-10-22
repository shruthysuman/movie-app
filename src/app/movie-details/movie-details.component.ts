import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  users:any;
 
  constructor( private _MovieService : MovieService) { 
  }

  ngOnInit() {
    this._MovieService.getAllMovies().subscribe((res:any) => {
        this.users = res.results;
        //console.log(this.users);
    })
  }

  searchMovie(event){
    // console.log(event.target.value);

    this._MovieService.getMoviesBySearch({search: event.target.value}).subscribe((res:any) => {
      this.users = res.results;
     // console.log(this.users);
    })
  }
}
