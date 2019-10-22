import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService { 

//  public base_url:string = 'http://api.themoviedb.org/3/';
//  public key:string = 'api_key=fcd1cec14afd0b9503f782133ef2e7ba';

base_url : any = 'http://api.themoviedb.org/3';
key : string = 'api_key=fcd1cec14afd0b9503f782133ef2e7ba';

  constructor(private _http: HttpClient) {}

  getAllMovies(){
    return this._http.get(this.base_url + '/discover/movie?' + this.key);
  }

  getUpcoming(){
    return this._http.get(this.base_url + '/movie/upcoming?' + this.key);
  }

  getpopularSeries(){
    return this._http.get(this.base_url + '/tv/popular?' + this.key);
  }

  getGenres(){
    return this._http.get(this.base_url + '/genre/movie/list?' + this.key);
  }

  getMovieByGenres(data:any){
    return this._http.get(this.base_url + '/genre/'+ data.id + data.name +'/movies?'+ this.key)
  }

  getMoviesBySearch(data:any){
    return this._http.get(this.base_url + '/search/movie?' + this.key + '&query=' + data.search);
  }

  getMovieDetailsClick(data:any){
    return this._http.get(this.base_url + '/movie/'+ data.id + '?' + this.key);
  }

  getCastofMovie(data:any){
    return this._http.get(this.base_url + '/movie/'+ data.id +'/credits?' + this.key);
  }

  getActorDetails(data:any){
    return this._http.get(this.base_url + '/person/'+ data.id +'?' + this.key);
  }

  getActorMovies(data:any){
    return this._http.get(this.base_url + '/person/'+ data.id +'/movie_credits?' + this.key);
  }

  getMovieTrailers(data:any){
    return this._http.get(this.base_url + '/movie/'+ data.id +'/videos?' + this.key);
  }

  getSimilarMovies(data:any){
    return this._http.get(this.base_url + '/movie/'+ data.id +'/similar?' + this.key);
  }

  getMovieReviews(data:any){
    return this._http.get(this.base_url + '/movie/'+ data.id +'/reviews?' + this.key);
  }
}


