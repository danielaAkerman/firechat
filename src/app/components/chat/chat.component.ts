import { Component, OnInit } from '@angular/core';

import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message: string = '';
  element: any;
  dark: boolean = false; // Para saber si estoy en darkmode

  constructor(public _cs: ChatService) {
    this._cs.getMessages().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 0);
    });

    if (
      document.querySelector('body')!.getAttribute('data-bs-theme') == 'dark'
    ) {
      this.dark = true; // Para cambiar el color de las letras del input
    }
  }

  ngOnInit() {
    this.element = document.getElementById('app-messages');
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
