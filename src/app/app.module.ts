import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BookService} from './service/book.service';
import { HomepageComponent } from './page/homepage/homepage.component';
import {CardComponent} from './widget/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './page/add-book/add-book.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'addbook',      component: AddBookComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavbarComponent,
    HomepageComponent,
    CardComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    // other imports here,
  ],
  providers: [BookService],

  bootstrap: [AppComponent]
})
export class AppModule { }
