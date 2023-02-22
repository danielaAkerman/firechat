import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

import { ChatService } from 'src/app/providers/chat.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, ChatRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    ChatService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
})
export class ChatModule {}
