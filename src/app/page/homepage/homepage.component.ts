import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  booklist: Book[] = [];

  constructor(public bookservice: BookService) {
  }

  ngOnInit() {
    this.bookservice.getBook().subscribe((res) => {

      this.booklist = res;
      console.log(this.booklist);
    });
  }

}
