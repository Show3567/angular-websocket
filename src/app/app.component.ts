import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-websocket';
  msglist: string[] = [];
  inputmsg = '';

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.socket.subscribe();
    // this.socketService.messages.subscribe((msg: string) => {
    //   this.msglist.push(msg);
    // });
  }

  sendmsg() {
    // this.socketService.sendMessage(this.inputmsg);
  }
}
