import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../Book';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  booklist: Book[];

  constructor(public bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getBook().subscribe((res) => {
        console.log(res);
      });
    }

}
