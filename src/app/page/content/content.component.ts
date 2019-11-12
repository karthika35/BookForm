import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'Angular 6 Project!';
  todaydate;
  componentproperty;
  constructor(private bookService: BookService) { }
  ngOnInit() {
  }
  onClickSubmit(book) {
    this.bookService.createBook(book).subscribe((res) => {
      console.log(res);
    });
  }
}
