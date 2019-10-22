import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  upcoming_movie:any;

  constructor( ) { 

  }

  ngOnInit() {
    // this._upcomingMovie.getUpcoming().subscribe((res:any) => {
    //   this.upcoming_movie = res.results;
    //   console.log('hii');
    //  })
  }

}
