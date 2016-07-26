import { Component } from '@angular/core';
import { NavController, NavParams, Toast, Loading } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {
  categoryName: string;
  categoryUrl: string;
  cartCount: number;

  product: Array<{ name: string, sku: string, price: number, sellPrice: number, isFavorite: boolean }>;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryUrl = this.navParams.get('url');
    this.cartCount = 15;
    this.product = [
      { name: 'Car Charger 3.4A RCC-303 (Rose Gold)- REMAX', sku: 'D1600261', price: 799, sellPrice: 256, isFavorite: true },
      { name: 'Car Charger Cable 2in1(RCC-103,Finchy,Gold) - REMAX', sku: 'D1600790', price: 799, sellPrice: 256, isFavorite: false },
      { name: '2USB RCC201 Car Charger - REMAX', sku: 'D1400508', price: 799, sellPrice: 256, isFavorite: false },
      { name: 'REMAX RA-USB Micro USB / Type-C Silver', sku: 'D1600584', price: 799, sellPrice: 256, isFavorite: true }
    ];

    /*let loading = Loading.create({
      content: "กำลังโหลดข้อมูล<br>กรุณารอสักครู่ค่ะ..."
    });
    this.nav.present(loading);*/
    //loading.dismiss();
  }

  goCart() {
    this.nav.parent.select(1);
    this.nav.pop();
    //this.nav.setRoot(CartPage);
  }

  updateFavorite(product) {
    product.isFavorite = !product.isFavorite;
    let toast = Toast.create({
      message: (product.isFavorite ? 'เพิ่ม' : 'ยกเลิก') + 'รายการที่ชื่นชอบเรียบร้อยแล้ว',
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
