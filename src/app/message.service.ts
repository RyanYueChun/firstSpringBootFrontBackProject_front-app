import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageFormat } from './model/MessageFormat';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<MessageFormat>(this.messageUrl);
  }
}
