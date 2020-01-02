import { Injectable } from '@angular/core';
import { BookFormat } from '../model/BookFormat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandling } from './error-handling.service';
import { catchError } from 'rxjs/operators';
import { GetRequests } from './getRequests.service';
import { Observable } from 'rxjs';
import { MessageFormat } from '../model/MessageFormat';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequestsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private baseBooksUrl: string = 'http://localhost:8080/books';
  private deleteUrl: string = '/delete/';
  private responseMessage: MessageFormat = { contents: '' }

  constructor(private getRequests: GetRequests, private http: HttpClient, private errorHandling: ErrorHandling) { }

  deleteBookById(id: string): Observable<MessageFormat> {
    this.writeErrorMessage('id', id);
    return this.http.delete<MessageFormat>(this.baseBooksUrl + this.deleteUrl + id, this.httpOptions).pipe(
      catchError(this.errorHandling.handleError<MessageFormat>('deleteBookById', this.responseMessage))
    );
  }

  writeErrorMessage(parameterName: string, parameterValue: string) {
    this.responseMessage.contents = `Book of ${parameterName} : ${parameterValue} was not deleted`;
    return this.responseMessage;
  }
}
