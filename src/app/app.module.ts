import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { GenresComponent } from './genres/genres.component';
import { MovieContentComponent } from './movie-content/movie-content.component';
import { ActorComponent } from './actor/actor.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { TvContentComponent } from './tv-content/tv-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MovieDetailsComponent,
    UpcomingComponent,
    DashboardComponent,
    PopularSeriesComponent,
    GenresComponent,
    MovieContentComponent,
    ActorComponent,
    SimilarMoviesComponent,
    TvContentComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
