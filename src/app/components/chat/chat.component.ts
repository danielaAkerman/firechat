import { Component } from '@angular/core';

import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  message: string = '';

  constructor(public _cs: ChatService) {
    this._cs.getMessages().subscribe();
  }

  send_message() {
    console.log(this.message);

    if (this.message.length === 0) {
      return;
    }

    this._cs
      .uploadMessages(this.message)
      .then(() => (this.message = ''))
      .catch((err) => console.log('Error', err));
  }
}
