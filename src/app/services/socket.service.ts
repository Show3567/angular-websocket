import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { SOCKRT_PATH } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket = io(this.socketPath);
  private messages$ = new BehaviorSubject<string>('');

  get messages() {
    return this.messages$.asObservable();
  }

  constructor(@Inject(SOCKRT_PATH) private socketPath: string) {}

  setupSocketConnection() {
    this.socket.on('msgToServer', (msg: string) => {
      this.messages$.next(msg);
    });
  }

  emitMessage(msg: string) {
    console.log(msg);
    this.socket.emit('msgToServer', msg);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
