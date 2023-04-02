import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3001/books/';

  getAllBooks(name?: string): Observable<Book[]> {
    const options = name
      ? { params: new HttpParams().set('author', name) }
      : {};

    return this.http.get<Book[]>(this.url, options);
  }

  getOneBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.url + id);
  }

  addOneBook(data: Book): Observable<Book> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Book>(this.url, data, options);
  }

  updateOneBook(id: string, data: Book): Observable<Book> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<Book>(this.url + id, data, options);
  }

  deleteOneBook(id: string): Observable<unknown> {
    return this.http.delete<Book>(this.url + id);
  }
}
