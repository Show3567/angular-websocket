import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-websocket';
  msglist: string[] = [];
  inputmsg = '';
  private timer!: ReturnType<typeof performance.now>;
  timercost = '';

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.setupSocketConnection();

    this.socketService.messages.subscribe((msg: string) => {
      if (!this.msglist.includes(msg) && msg.trim() !== '') {
        this.msglist.push(msg);
      }
      this.timercost = (performance.now() - this.timer).toFixed(3);
    });
  }
  ngOnDestroy(): void {
    this.socketService.disconnect();
  }
  sendmsg(): void {
    this.socketService.emitMessage(this.inputmsg);
    this.timer = performance.now();
    this.inputmsg = '';
  }
}
