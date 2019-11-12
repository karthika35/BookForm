import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../Book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() Book: string;
  @Input() Price: number;

  constructor() { }

  ngOnInit() {
  }

}
