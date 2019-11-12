import { Component, OnInit } from '@angular/core';
import {Book} from '../../Book';
import {BookService} from '../../service/book.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book[];
  bookForm = new FormGroup ({
    bookName: new FormControl(),
    price: new FormControl(),
    authorName: new FormControl(),


  });
  constructor(public bookservice: BookService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bookservice.postBook(this.bookForm.value);
  }

}
