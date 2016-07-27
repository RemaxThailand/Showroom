import { Component } from '@angular/core';
import { NavController, NavParams, Toast } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/product-info/product-info.html',
})
export class ProductInfoPage {
  productName: string;
  productSku: string;
  image: Array<{ name: string }>;
  items = [];
  loadFinish: boolean = false;
  qty: number = 1;
  qtyRemain: number = 99;
  isFavorite: boolean = false;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.productName = this.navParams.get('productName');
    this.productSku = this.navParams.get('productSku');
    this.image = [
      { name: 'D01.jpg' },
      { name: 'D02.jpg' },
      { name: 'D03.jpg' },
      { name: 'D05.jpg' },
      { name: 'D06.jpg' },
      { name: 'D07.jpg' },
      { name: 'D08.jpg' },
      { name: 'D09.jpg' },
      { name: 'D10.jpg' },
      { name: 'D15.jpg' }
    ];
  }

  slideOptions = {
    initialSlide: 0,
    loop: true,
    autoplay: 2000
  };

  updateQuantity(qty) {
    this.qty += qty;
    if (this.qty <= 0) this.qty = 1;
    if (this.qty > this.qtyRemain) this.qty = this.qtyRemain;
  }

  setQuantity(qty) {
    this.qty = qty;
    if (this.qty <= 0) this.qty = 1;
    if (this.qty > this.qtyRemain) this.qty = this.qtyRemain;
  }

  addCart() {
    this.qtyRemain -= this.qty;
    let toast = Toast.create({
      message: 'เพิ่มสินค้าลงในรถเข็น '+this.qty+' ชิ้น เรียบร้อยแล้ว',
      duration: 3000
    });
    this.nav.present(toast);
    if (this.qty > 0) this.qty = 1;
  }

  updateFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.items.push(this.image[this.items.length]);
      this.loadFinish = this.items.length == this.image.length;
      infiniteScroll.complete();
    }, 500);
  }

}
