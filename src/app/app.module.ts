import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { ContentComponent } from './page/content/content.component';
import { FormsModule } from '@angular/forms';
import { BookService} from './service/book.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [BookService],

  bootstrap: [AppComponent]
})
export class AppModule { }
