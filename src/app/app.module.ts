import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

export const SOCKRT_PATH = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: SOCKRT_PATH,
      useValue: 'http://localhost:4231',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
