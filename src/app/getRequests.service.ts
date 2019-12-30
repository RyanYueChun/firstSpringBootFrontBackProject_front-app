import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageFormat } from './model/MessageFormat';
import { GreetingFormat } from './model/GreetingFormat';

@Injectable({
  providedIn: 'root'
})
export class GetRequests {
  private messageUrl: string = 'http://localhost:8080';
  private greetingUrl: string = 'http://localhost:8080/greeting';

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<MessageFormat>(this.messageUrl);
  }

  getGreeting() {
    return this.http.get<GreetingFormat>(this.greetingUrl);
  }
}
