import { Inject, Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { SOCKRT_PATH } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socketPath = inject<string>(SOCKRT_PATH);
  private socket: Socket = io(this.socketPath, {
    path: '/socket/socket.io', // * set the websocket path;
    transports: ['websocket', 'polling'],
  });
  private messages$ = new BehaviorSubject<string>('');

  get messages() {
    return this.messages$.asObservable();
  }

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
