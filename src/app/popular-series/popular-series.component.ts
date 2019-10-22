import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {

  series:any;

  constructor(private _popularSeries: MovieService) { }

  ngOnInit() {

    this._popularSeries.getpopularSeries().subscribe((series:any) => {
        this.series = series.results;
        //console.log(this.series);
    })
  }

}
