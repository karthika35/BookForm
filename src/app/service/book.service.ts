import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Book} from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  endpoint = 'http://tranquil-shore-30082.herokuapp.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  booklist: Book[];
  constructor(private http: HttpClient) { }

  // addProduct(book): Observable<any> {
  //   console.log(book);
  //   return this.http.post<any>(this.endpoint + 'products', JSON.stringify(book), this.httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }
  // public createBook() {
  //   return this.http.post(`${this.endpoint}/api/book`, this.booklist);
  // }
  getBook() {
    return this.http.get<Book[]>(`${this.endpoint}api/book`);

  }
}
