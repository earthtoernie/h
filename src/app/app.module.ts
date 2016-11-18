import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
