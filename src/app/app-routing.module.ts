import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './page/homepage/homepage.component';
import {AddBookComponent} from './page/add-book/add-book.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'book_details',
    component: HomepageComponent,
  },
  {
    path: 'add_book',
    component: AddBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
