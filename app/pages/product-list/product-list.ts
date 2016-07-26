import { Component } from '@angular/core';
import { NavController, NavParams, Toast } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {
  categoryName: string;
  categoryUrl: string;
  cartCount: number;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryUrl = this.navParams.get('url');
    this.cartCount = 15;
  }

  goCart() {
    this.nav.parent.select(1);
    this.nav.pop();
    //this.nav.setRoot(CartPage);
  }

  updateFavorite() {
    let toast = Toast.create({
      message: 'เพิ่มรายการที่ชื่นชอบเรียบร้อยแล้ว',
      duration: 3000
    });
    this.nav.present(toast);
  }

  updateCart() {
    this.cartCount++;
    let toast = Toast.create({
      message: 'เพิ่มสินค้าลงในรถเข็นเรียบร้อยแล้ว',
      duration: 3000
    });
    this.nav.present(toast);
  }

}
