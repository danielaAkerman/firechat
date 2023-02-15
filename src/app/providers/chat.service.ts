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
    this.itemsCollection = this.afs.collection<Message>('chat', (ref) =>
      ref.orderBy('date', 'desc').limit(24)
    );

    return this.itemsCollection.valueChanges().pipe(
      map((messages: Message[]) => {
        this.chats = [];

        for (let message of messages) {
          this.chats.unshift(message);
        }

        return this.chats;
      })
    );
  }

  uploadMessages(texto: string) {
    // FALTA uid DEL USER
    let message: Message = {
      from: 'Dani',
      message: texto,
      date: new Date().getTime(),
    };

    return this.itemsCollection.add(message);
  }
}
