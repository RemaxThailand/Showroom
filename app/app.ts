import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { ProductPage } from './pages/product/product';
import { ProfilePage } from './pages/profile/profile';
import { CartPage } from './pages/cart/cart';
import { HistoryPage } from './pages/history/history';
import { SettingPage } from './pages/setting/setting';
import { SearchPage } from './pages/search/search';

@Component({
  templateUrl: 'build/app.html'
})
class RemaxApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProductPage;

  pages: Array<{title: string, component: any, icon: string}>;
  selectedPage: string;

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'สินค้า', component: ProductPage, icon: 'ios-keypad' },
      { title: 'รถเข็นสินค้า', component: CartPage, icon: 'md-cart' },
      { title: 'ประวัติคำสั่งซื้อ', component: HistoryPage, icon: 'md-time' },
      { title: 'ข้อมูลส่วนตัว', component: ProfilePage, icon: 'ios-contact' },
      { title: 'การตั้งค่า', component: SettingPage, icon: 'md-settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleBlackTranslucent();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(RemaxApp);
