import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentTitle = 'User manager application';
  currentMessage: string = 'A simple Angular app';

  buttonClickedMessage() {
    this.currentMessage = 'Hey, you have just clicked the button';
}
}
