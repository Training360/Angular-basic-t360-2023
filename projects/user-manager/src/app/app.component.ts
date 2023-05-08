import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentTitle = 'User manager application';
  currentMessage: string = 'A simple Angular app';

  // Output
  buttonClickedMessage() {
    if (this.currentMessage === 'Hey, you have just clicked the button')
      this.currentMessage = 'A simple Angular app';
    else this.currentMessage = 'Hey, you have just clicked the button';
  }
}
