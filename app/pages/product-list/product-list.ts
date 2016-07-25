import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {
  categoryName: string;
  categoryUrl: string;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryUrl = this.navParams.get('url');
  }

  goCart() {
    this.nav.pop();
    //this.nav.setRoot(CartPage);
  }

}
