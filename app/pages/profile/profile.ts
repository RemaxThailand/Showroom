import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Device } from 'ionic-native';
import * as io from "socket.io-client";

@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  platform: any;
  width: any;
  height: any;
  lang: any;
  platforms: any;
  userAgent: any;
  uuid: any;

  //socket: SocketIOClient.Socket;

  /*constructor(private nav: NavController) {
    this.connect();
  }*/

  constructor(platform: Platform) {
    this.platform = platform;
    this.width = this.platform.width();
    this.height = this.platform.height();
    this.lang = this.platform.lang();
    this.platforms = this.platform.platforms();
    this.userAgent = this.platform.userAgent();
    this.uuid = Device.device.uuid;
    /*console.log('width:' + this.platform.width());
    console.log('height:' + this.platform.height());
    console.log('lang:' + this.platform.lang());
    console.log('platforms:' + this.platform.platforms());
    console.log('userAgent:' + this.platform.userAgent());*/
    //console.log(this.platform);
  }

  connect() {
    var socket = io('https://realtime-test.remaxthailand.co.th');

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI0MUMzODAyNy03OTUzLTREQTgtOEJCRS0zOTlDQUQ2NTkyRDQiLCJzZWNyZXRLZXkiOiJTaG93Um9vbVRlc3QiLCJpYXQiOjE0NzAyOTEyNzh9.cVuJVMbw81j5ZFeKWemPRRQZpiDAmgRaNhnlX7KWvBM';
    //socket.emit('access', { apiKey: '41C38027-7953-4DA8-8BBE-399CAD6592D4' });
    socket.emit('access', {
      token: token
    });

    socket.on('access', function(data) {
      console.log(data);
    });

    socket.on('access', function(data) {
      if (data.success) {
        token = data.token;
        socket.emit('api', {
          token: token,
          module: 'test',
          action: 'hello'
        });
      } else {
        alert(data.error + ' : ' + data.errorMessage);
      }
    });

    socket.on('api', function(data) {
      console.log(data);
    });

  }

}
