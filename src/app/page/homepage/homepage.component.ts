import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  booklist: Book[] = [];

  constructor(public bookservice: BookService, private router: Router) {
  }

  ngOnInit() {
    this.bookservice.getBook().subscribe((res) => {

      this.booklist = res;
      console.log(this.booklist);
    });
  }

  bookOnClick(id: number) {
    this.router.navigate(['/book'], {queryParams: {id: id}});
  }
}
