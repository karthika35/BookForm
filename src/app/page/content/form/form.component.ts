import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../service/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public bookservice: BookService) { }

  ngOnInit() {
  }

}
