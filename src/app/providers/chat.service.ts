import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Message } from '../interfaces/message.interface';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;

  public chats: Message[] = [];

  constructor(private afs: AngularFirestore) {}

  getMessages() {
    this.itemsCollection = this.afs.collection<Message>('chat');

    return this.itemsCollection
      .valueChanges()
      .pipe(map((messages: Message[]) => (this.chats = messages)));
  }

  uploadMessages(texto: string) {
    // FALTA uid DEL USER
    let message: Message = {
      from: 'Dani',
      message: texto,
      fecha: new Date().getTime(),
    };

    return this.itemsCollection.add(message)
  }
}
