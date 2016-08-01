import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from "socket.io-client";

@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  //socket: SocketIOClient.Socket;

  constructor(private nav: NavController) {
    this.connect();
  }

  connect() {
    var socket = io('http://103.58.148.77:3000');
    socket.on('connect', function () {
      console.log('connect');
        socket.emit('news', { hello: 'world' });
    });

  }

}
