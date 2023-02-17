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

  constructor(public _cs: ChatService) {
    this._cs.getMessages().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 0);
    });
  }

  ngOnInit() {
    this.element = document.getElementById('app-messages');

    // if(localStorage.getItem("theme") == "dark"){
    //   this._nc.cambiarTema()

    // }
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
