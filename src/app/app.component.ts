import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { MessageFormat } from './model/MessageFormat';

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

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.messageService.getMessage()
      .subscribe((data: MessageFormat) => this.message = data);
  }

}
