import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { GenresComponent } from './genres/genres.component';
import { MovieContentComponent } from './movie-content/movie-content.component';
import { ActorComponent } from './actor/actor.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path:'movie-details', component: MovieDetailsComponent},
  {path:'upcoming', component: UpcomingComponent},
  {path:'popularSeries', component: PopularSeriesComponent },
  {path:'genres', component: GenresComponent},
  {path:'movieContent/:id', component: MovieContentComponent},
  {path:'actor/:id', component: ActorComponent},
  {path:'similarMovies/:id', component: SimilarMoviesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
