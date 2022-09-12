import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject } from 'rxjs';
import { catchError, switchAll, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket$: WebSocketSubject<any> = webSocket(
    'ws://localhost:4232/socket.io/?EIO=3&transport=websocket'
  );
  socketBroadcastor$ = this.socket$.asObservable();

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }
  close() {
    this.socket$.complete();
  }
}
