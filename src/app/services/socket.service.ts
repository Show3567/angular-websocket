import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket!: Socket;
  private readonly messages$ = new Subject<string>();

  get messages() {
    return this.messages$.asObservable();
  }

  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:4231');
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
