import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GreetingFormat } from './model/GreetingFormat';
import { BookFormat } from './model/BookFormat';
import { ErrorHandling } from './error-handling.service';
import { MessageFormat } from './model/MessageFormat';

@Injectable({
  providedIn: 'root'
})
export class PostRequests{
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private greetingUrl: string = 'http://localhost:8080/greeting';
  private saveAllBooksUrl: string = 'http://localhost:8080/books/saveAll';

  constructor(private http: HttpClient, private errorHandling: ErrorHandling) { }

  postGreeting(name: string): Observable<GreetingFormat> {
    let simpleMessage: MessageFormat = { contents: name };
    let jsonContent: string = JSON.stringify(simpleMessage);
    return this.http.post<GreetingFormat>(this.greetingUrl, jsonContent, this.httpOptions).pipe(
      catchError(this.errorHandling.handleError<GreetingFormat>('postGreeting'))
    );
  }

  postSaveAllBooks(books: BookFormat[]): Observable<MessageFormat> {
    let jsonContent: string = JSON.stringify(books);
    return this.http.post<MessageFormat>(this.saveAllBooksUrl, jsonContent, this.httpOptions).pipe(
      catchError(this.errorHandling.handleError<MessageFormat>('postGreeting'))
    );
  }
}
