import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcoming: any;
 

  constructor( private _MovieService : MovieService) { }

  ngOnInit() {
   
    this._MovieService.getUpcoming().subscribe((response:any) => {
       this.upcoming = response.results;
      //  console.log(this.upcoming);
    })

    }
  }

