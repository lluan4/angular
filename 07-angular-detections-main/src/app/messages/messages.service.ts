import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);

  allMessages = this.messages.asReadonly();

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
// import { Injectable, signal } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class MessagesService {
//   // private messages = signal<string[]>([]);
//   private messages: string[] = [];
//   messages$ = new BehaviorSubject<string[]>([]);

//   // allMessages = this.messages.asReadonly();

//   get allMessages() {
//     return [...this.messages];
//   }

//   addMessage(message: string) {
//     this.messages = [...this.messages, message];
//     this.messages$.next(this.messages);
//   }
// }
