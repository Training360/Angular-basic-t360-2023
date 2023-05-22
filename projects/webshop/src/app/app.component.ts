import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webshop';
  currentMessage: string = '';

  buttonClickedMessage() {
    if (this.currentMessage === 'Hey, you have just clicked the button')
      this.currentMessage = '';
    else this.currentMessage = 'Hey, you have just clicked the button';
  }
}
