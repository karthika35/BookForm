import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Book} from '../Book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  endpoint = 'http://tranquil-shore-30082.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  // addProduct(book): Observable<any> {
  //   console.log(book);
  //   return this.http.post<any>(this.endpoint + 'products', JSON.stringify(book), this.httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }
  public postBook() {
    const book = new Book();

    this.http.post<any>(`${this.endpoint}api/book`, book).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  getBook(): Observable<Book[]> {
    return this.http.get<any>(`${this.endpoint}api/book`)
      .pipe(
        map(res => res.payload)
      );

  }
}
