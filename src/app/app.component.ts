import { Component } from '@angular/core';
import { GetRequests } from './getRequests.service';
import { MessageFormat } from './model/MessageFormat';
import { GreetingFormat } from './model/GreetingFormat';
import { PostRequests } from './post-requests.service';
import { ErrorHandling } from './error-handling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring Boot Front/Back project: App component';
  message: MessageFormat = {
    contents : 'Contents not initialized'
  };
  greeting: GreetingFormat = {
    id : 0,
    content : 'Contents not initialized'
  }
  logs: string[] = [];
  userName: string = '';

  constructor(private getRequests: GetRequests, private postRequests: PostRequests, private errorHandling: ErrorHandling) { }

  ngOnInit() {
    this.getMessage();
    this.getGreeting();
  }

  getMessage() {
    this.getRequests.getMessage()
      .subscribe((data: MessageFormat) => this.message = data);
  }

  getGreeting() {
    this.getRequests.getGreeting()
      .subscribe((data: GreetingFormat) => this.greeting = data)
  }

  getLogs() {
    this.logs = this.errorHandling.logs;
  }

  sendName() {
    this.postRequests.postGreeting(this.userName)
      .subscribe((data: GreetingFormat) => this.greeting = data)
  }

}
