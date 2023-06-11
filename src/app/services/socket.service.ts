import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket = new WebSocket('ws://localhost:3001');
  private messages$ = new Subject<string>();

  get messages() {
    return this.messages$.asObservable();
  }

  constructor() {
    this.socket.onmessage = (event) => {
      this.messages$.next(event.data);
    };
    this.socket.onerror = (error) => {
      console.log(`WebSocket Error: `, error);
    };
  }

  sendMessage(message: string): void {
    const data = {
      event: 'msgToServer',
      data: message,
    };
    this.socket.send(JSON.stringify(data));
  }
}

export interface Document {
  id: string;
  doc: string;
}
