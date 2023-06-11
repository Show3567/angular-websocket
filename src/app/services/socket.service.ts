import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  // private socket = new WebSocket('ws://localhost:3001');
  socket = webSocket('ws://localhost:3001');
  // private messages$ = new Subject<string>();

  // get messages() {
  //   return this.messages$.asObservable();
  // }

  constructor() {
    // this.socket.pipe(
    //   tap((msg) => {
    //     console.log(msg);
    //   })
    // );
    // this.socket.onmessage = (event) => {
    //   this.messages$.next(event.data);
    // };
    // this.socket.onerror = (error) => {
    //   console.log(`WebSocket Error: `, error);
    // };
  }

  sendMessage(message: string): void {
    // const data = {
    //   event: 'msgToServer',
    //   data: message,
    // };
    // this.socket.next(JSON.stringify(data));
  }
}
