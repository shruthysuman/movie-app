import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  Genres: any;
  title: any;
  genreResult =[];
  movie:any;

  constructor(private router: ActivatedRoute, private _genres: MovieService ) { }

  ngOnInit() {
    
    this._genres.getGenres().subscribe((res:any) => {
      this.movie = res.genres;
      //console.log(this.movie);
    });

    this.router.queryParams.subscribe((params) => {
      const id = params['id'];
      this.title = params['name'];

      this._genres.getMovieByGenres({id:id, name: this.title}).subscribe((res:any) => {
            this.genreResult = res.results;
      });
    });
  }
}
