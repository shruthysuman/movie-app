import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css']
})
export class MovieContentComponent implements OnInit {
  movie: any;
  trailer:any;
  cast: any = [];
  actor: any = [];
  id: any;
  similar: any = [];
  reviews: any;

  constructor(private _MovieService: MovieService, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Open movie-content copmonent
    this._route.params.subscribe(params => {
      this.id = params['id'];

      this._MovieService.getMovieDetailsClick({ id: this.id }).subscribe((res) => {
        this.movie = res;
        //console.log(this.movie);
      });

      //  Cast section of the movie
      this._MovieService.getCastofMovie({ id: this.id }).subscribe((res: any) => {
        this.cast = res.cast.slice(0, 4);
      });

      this._MovieService.getMovieTrailers({id:this.id}).subscribe((res:any) => {
        this.trailer = res.results[0];
        //console.log(this.trailer);
      });

      this._MovieService.getSimilarMovies({id:this.id}).subscribe((res:any) => {
        this.similar = res.results.slice(0,10);
        //console.log(this.similar);
      });

      this._MovieService.getMovieReviews({id:this.id}).subscribe((res:any) => {
        this.reviews = res.results;
        console.log(this.reviews);
      })

    });
  }
}
