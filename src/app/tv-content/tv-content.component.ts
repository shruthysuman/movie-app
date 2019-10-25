import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-content',
  templateUrl: './tv-content.component.html',
  styleUrls: ['./tv-content.component.css']
})
export class TvContentComponent implements OnInit {

  series: any = [];
  id: any;
  constructor(private _movieService: MovieService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe((parameters:any) => {
      this.id = parameters['id'];

      this._movieService.getSeriesDetails({id:this.id}).subscribe((result:any) => {
        this.series = result;
        console.log(this.series);
      });
    });

    
  }

}
