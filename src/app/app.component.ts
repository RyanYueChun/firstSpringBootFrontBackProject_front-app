import { Component } from '@angular/core';
import { GetRequests } from './services/getRequests.service';
import { MessageFormat } from './model/MessageFormat';
import { GreetingFormat } from './model/GreetingFormat';
import { PostRequests } from './services/post-requests.service';
import { ErrorHandling } from './services/error-handling.service';
import { BookFormat } from './model/BookFormat';
import { DeleteRequestsService } from './services/delete-requests.service';

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
  bookMap: Map<number, BookFormat> = new Map();

  constructor(private getRequests: GetRequests, private postRequests: PostRequests, private deleteRequests: DeleteRequestsService, private errorHandling: ErrorHandling) { }

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
      .subscribe((data: GreetingFormat) => this.greeting = data);
  }

  getLogs() {
    this.logs = this.errorHandling.logs;
  }

  sendName() {
    this.postRequests.postGreeting(this.userName)
      .subscribe((data: GreetingFormat) => this.greeting = data);
  }

  assignBookValues(id: string, title: string, author, releaseDate: string): BookFormat {
    let newBook: BookFormat = {
      id: id,
      title: title,
      author: author,
      releaseDate: releaseDate
    }
    return newBook;
  }

  addBookToMap() {
    // Creating a new BookFormat object to prevent the "same" pointers issues
    let newBook: BookFormat = new BookFormat(this.bookToSave.id, this.bookToSave.title, this.bookToSave.author, this.bookToSave.releaseDate);
    this.bookMap.set(parseInt(this.bookToSave.id), newBook);
  }

  saveAllBooks() {
    let booksToSave: BookFormat[] = [];
    this.bookMap.forEach(book => {
      booksToSave.push(book);
    });

    this.postRequests.postSaveAllBooks(booksToSave)
      .subscribe((data: MessageFormat) => this.message = data);
  }

  getBookById(id: string) {
    this.getRequests.getBookById(id)
      .subscribe((data: BookFormat) => this.bookFetched = data);
  }

  getBookByAuthor(author: string) {
    this.getRequests.getBookByAuthor(author)
      .subscribe((data: BookFormat[]) => this.booksFetched = data);
  }

  getBookByTitle(title: string) {
    this.getRequests.getBookByTitle(title)
      .subscribe((data: BookFormat[]) => this.booksFetched = data);
  }

  getAllBooks() {
    this.getRequests.getAllBooks()
      .subscribe((data: any) => this.booksFetched = data.content);
  }

  deleteBookById(id: string) {
    this.deleteRequests.deleteBookById(id)
      .subscribe((data: MessageFormat) => this.message = data);
  }

}
