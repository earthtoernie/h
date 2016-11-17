import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashComponent} from "./dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
