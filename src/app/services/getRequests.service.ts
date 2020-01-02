import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageFormat } from '../model/MessageFormat';
import { GreetingFormat } from '../model/GreetingFormat';
import { BookFormat } from '../model/BookFormat';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandling } from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class GetRequests {
  private messageUrl: string = 'http://localhost:8080';
  private greetingUrl: string = 'http://localhost:8080/greeting';
  private baseBooksUrl: string = 'http://localhost:8080/books';
  private getAllUrl: string = '/getAll';
  private getByIdUrl: string = '/getById/';
  private getByAuthorUrl: string = '/getByAuthor/';
  private getByTitleUrl: string = '/getByTitle/';
  private emptyBook: BookFormat = {
    id: '',
    title: '',
    author: '',
    releaseDate: ''
  };
  private emptyBooks: BookFormat[] = [];

  constructor(private http: HttpClient, private errorHandling: ErrorHandling) { }

  getMessage() {
    return this.http.get<MessageFormat>(this.messageUrl);
  }

  getGreeting() {
    return this.http.get<GreetingFormat>(this.greetingUrl);
  }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(this.baseBooksUrl + this.getAllUrl).pipe(
      catchError(this.errorHandling.handleError<any>('getAllBooks', this.emptyBooks))
    );
  }

  getBookById(id: string): Observable<BookFormat> {
    return this.http.get<BookFormat>(this.baseBooksUrl + this.getByIdUrl + id).pipe(
      catchError(this.errorHandling.handleError<BookFormat>('getBookById', this.emptyBook))
    );
  }

  getBookByAuthor(author: string): Observable<BookFormat[]> {
    return this.http.get<BookFormat[]>(this.baseBooksUrl + this.getByAuthorUrl + author).pipe(
      catchError(this.errorHandling.handleError<BookFormat[]>('getBookByAuthor', this.emptyBooks))
    );
  }

  getBookByTitle(title: string): Observable<BookFormat[]> {
    return this.http.get<BookFormat[]>(this.baseBooksUrl + this.getByTitleUrl + title).pipe(
      catchError(this.errorHandling.handleError<BookFormat[]>('getBookByTitle', this.emptyBooks))
    );
  }
}
