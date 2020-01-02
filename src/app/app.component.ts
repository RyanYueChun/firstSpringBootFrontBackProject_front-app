import { Component } from '@angular/core';
import { GetRequests } from './getRequests.service';
import { MessageFormat } from './model/MessageFormat';
import { GreetingFormat } from './model/GreetingFormat';
import { PostRequests } from './post-requests.service';
import { ErrorHandling } from './error-handling.service';
import { BookFormat } from './model/BookFormat';

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
  bookFetched: BookFormat = {
    id: '',
    title: '',
    author: '',
    releaseDate: ''
  };
  booksFetched: BookFormat[];
  bookToSave: BookFormat = {
    id: '',
    title: '',
    author: '',
    releaseDate: ''
  };
  booksToSave: BookFormat[] = [];

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

  addBookToArray() {
    this.booksToSave.push(this.bookToSave);
  }

  saveAllBooks() {
    this.postRequests.postSaveAllBooks(this.booksToSave)
      .subscribe((data: MessageFormat) => this.message = data)
  }

  getBookById(id: string) {
    this.getRequests.getBookById(id)
      .subscribe((data: BookFormat) => this.bookFetched = data)
  }

  getBookByAuthor(author: string) {
    this.getRequests.getBookByAuthor(author)
      .subscribe((data: BookFormat[]) => this.booksFetched = data)
  }

  getBookByTitle(title: string) {
    this.getRequests.getBookByTitle(title)
      .subscribe((data: BookFormat[]) => this.booksFetched = data)
  }

}
