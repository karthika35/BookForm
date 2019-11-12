import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Book} from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  endpoint = 'https://tranquil-shore-30082.herokuapp.com/v2/api-docs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient, public book: Book) { }

  // addProduct(book): Observable<any> {
  //   console.log(book);
  //   return this.http.post<any>(this.endpoint + 'products', JSON.stringify(book), this.httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }
  public createBook(book: Book) {
    return this.http.post(`${this.endpoint}/api/book`, book);
  }
}
