import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

// Componentes
import { ChatComponent } from './components/chat/chat.component';

// Servicios
import { ChatService } from './providers/chat.service';

import {FIREBASE_OPTIONS} from "@angular/fire/compat"



@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [ChatService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
