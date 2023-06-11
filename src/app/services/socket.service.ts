import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket = io('http://localhost:4231');
  private messages$ = new BehaviorSubject<string>('');

  get messages() {
    return this.messages$.asObservable();
  }

  constructor() {}

  setupSocketConnection() {
    this.socket.on('msgToServer', (msg: string) => {
      this.messages$.next(msg);
    });
  }

  emitMessage(msg: string) {
    this.socket.emit('msgToServer', msg);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
