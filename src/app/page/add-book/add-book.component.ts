import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book[];
  bookForm = new FormGroup({
    bookName: new FormControl(),
    price: new FormControl(),
    authorId: new FormControl(),
  });

  constructor(public bookservice: BookService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const book: any = {
      name: this.bookForm.get('bookName').value,
      price: this.bookForm.get('bookName').value,
      authorId: this.bookForm.get('authorId').value,

    };
    // console.log(book);
    this.bookservice.postBook(book).subscribe(res => {
      console.log(res);
    });
  }

}
