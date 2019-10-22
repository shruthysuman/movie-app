import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  id: number;
  person: any = [];
  Actormovie: any = [];
  constructor(private _MovieService: MovieService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe((parameters:any) => {
      this.id = parameters['id'];

      this._MovieService.getActorDetails({id:this.id}).subscribe((person:any) => {
        this.person = person;
        //console.log(this.actor);
      });

      this._MovieService.getActorMovies({id:this.id}).subscribe((res:any) => {
        this.Actormovie = res.cast;
        console.log(this.Actormovie);
      });
    });
  }

}
