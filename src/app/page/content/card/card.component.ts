import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../service/book.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor( public bookService: BookService) { }

  ngOnInit() {
  } getData(book) {
    this.bookservice.getBook(book).subscribe((res) => {
      console.log(res);
    });
  }

}
