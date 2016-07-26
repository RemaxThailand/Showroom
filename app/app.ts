import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page2 } from './pages/page2/page2';
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
      { title: 'Page dos', component: Page2, icon: 'menu' },
      { title: 'สินค้า', component: ProductPage, icon: 'ios-keypad' },
      { title: 'รถเข็นสินค้า', component: CartPage, icon: 'md-cart' },
      { title: 'ประวัติคำสั่งซื้อ', component: HistoryPage, icon: 'md-time' },
      { title: 'ข้อมูลส่วนตัว', component: ProfilePage, icon: 'ios-contact' },
      { title: 'การตั้งค่า', component: SettingPage, icon: 'md-settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(RemaxApp);
