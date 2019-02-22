import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './article/article.component'; //Aggiungiamo qui 

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, NgbModule //Aggiungiamolo qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
