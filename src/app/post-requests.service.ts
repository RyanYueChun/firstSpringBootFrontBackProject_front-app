import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GreetingFormat } from './model/GreetingFormat';
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

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandling) { }

  postGreeting(name: string): Observable<GreetingFormat> {
    let simpleMessage: MessageFormat = { contents: name };
    let body: String = JSON.stringify(simpleMessage);
    console.log(body);
    return this.http.post<GreetingFormat>(this.greetingUrl, body, this.httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<GreetingFormat>('postGreeting'))
    )
  }
}
