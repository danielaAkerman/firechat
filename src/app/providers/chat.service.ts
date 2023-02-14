import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;


  public chats: any[] = [];

  constructor(private afs: AngularFirestore) {}

  uploadMessages(){
    this.itemsCollection = this.afs.collection<any>('chat');

    return this.itemsCollection.valueChanges();

  }
}
