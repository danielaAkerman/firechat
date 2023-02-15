import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';

import { Message } from '../interfaces/message.interface';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;

  public chats: Message[] = [];
  public user: any = {};

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {
    this.auth.authState.subscribe((u) => {
      if (!u) {
        return;
      }

      this.user.name = u.displayName;
      this.user.email = u.email;
      this.user.thumbnail = u.photoURL;
      this.user.uid = u.uid;

      console.log(this.user);
    });
  }

  login(proveedor: string) {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

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
