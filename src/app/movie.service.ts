import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {} from LocalDataService

@Injectable({
  providedIn: 'root'
})
export class MovieService { 

base_url : any = 'http://api.themoviedb.org/3';
key : string = 'fcd1cec14afd0b9503f782133ef2e7ba';

API = {
  DISCOVER: '/discover/movie',
  UPCOMING: '/movie/upcoming',
  POPULAR_SERIES: '/tv/popular',
  SERIES_DETAILS: '/tv/',
  GENRES: '/genre/movie/list',
  MOVIE_BY_GENRES: '/genre/',
  MOVIE_BY_SEARCH:'/search/movie',
  MOVIE_DETAILS_ON_CLICK: '/movie/',
  CAST_OF_MOVIE: '/movie/',
  ACTOR_DETAILS:'/person/',
  ACTOR_MOVIES: '/person/',
  MOVIE_TRAILERS: '/movie/',
  SIMILAR_MOVIES: '/movie/',
  MOVIE_REVIEWS: '/movie/'
};

  constructor(private _http: HttpClient) {}

  getAllMovies(){
    return this.get(this.API.DISCOVER);
  }

  getUpcoming(){
    return this.get(this.API.UPCOMING);
  }

  getpopularSeries(){
    return this.get(this.API.POPULAR_SERIES);
  }

  getSeriesDetails(data:any){
    return this.get(this.API.SERIES_DETAILS + data.id);
    // return this._http.get(this.base_url + '/tv/'+ data.id + '?' + this.key);
  }

  getGenres(){
    return this.get(this.API.GENRES);
  }

  getMovieByGenres(data:any){
    return this.get(this.API.MOVIE_BY_GENRES + data.id + data.name + '/movies');
    // return this._http.get(this.base_url + '/genre/'+ data.id + data.name +'/movies?'+ this.key)
  }

  getMoviesBySearch(data:any){
        return this.get(this.API.MOVIE_BY_SEARCH, { query: data.search });
    // return this._http.get(this.base_url + '/search/movie?' + this.key + '&query=' + data.search);
  }

  getMovieDetailsClick(data:any){
      return this.get(this.API.MOVIE_DETAILS_ON_CLICK + data.id);
    // return this._http.get(this.base_url + '/movie/'+ data.id + '?' + this.key);
  }

  getCastofMovie(data:any){
       return this.get(this.API.CAST_OF_MOVIE + data.id + '/credits');
    // return this._http.get(this.base_url + '/movie/'+ data.id +'/credits?' + this.key);
  }

  getActorDetails(data:any){
        return this.get(this.API.ACTOR_DETAILS + data.id);
    // return this._http.get(this.base_url + '/person/'+ data.id +'?' + this.key);
  }

  getActorMovies(data:any){
        return this.get(this.API.ACTOR_MOVIES + data.id + '/movie_credits');
    // return this._http.get(this.base_url + '/person/'+ data.id +'/movie_credits?' + this.key);
  }

  getMovieTrailers(data:any){
        return this.get(this.API.MOVIE_TRAILERS + data.id + '/videos');
    // return this._http.get(this.base_url + '/movie/'+ data.id +'/videos?' + this.key);
  }

  getSimilarMovies(data:any){
        return this.get(this.API.SIMILAR_MOVIES + data.id + '/similar');
    // return this._http.get(this.base_url + '/movie/'+ data.id +'/similar?' + this.key);
  }

  getMovieReviews(data:any){
       return this.get(this.API.MOVIE_REVIEWS + data.id + '/reviews');
    // return this._http.get(this.base_url + '/movie/'+ data.id +'/reviews?' + this.key);
  }

  get(url, param:any={}) {
    param.api_key = this.key;
    return this._http.get(this.base_url + url + '?' + this.serialize(param));
  }

  serialize(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }
}


