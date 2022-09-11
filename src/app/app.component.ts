import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-websocket';

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.socketBroadcastor$.subscribe(console.log);
  }
}
