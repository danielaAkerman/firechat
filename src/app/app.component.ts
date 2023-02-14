import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Chat {
  name: string,
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public item$: Observable<Chat[]>;
  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'chat') as any;
    this.item$ = collectionData(coll);
  }}
