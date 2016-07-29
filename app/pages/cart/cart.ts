import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/cart/cart.html',
})
export class CartPage {

  product: Array<{ name: string, sku: string, price: number, sellPrice: number, qty: number, remain: number, isSelected: boolean }>;
  totalPrice: number = 0;
  discountPercent: number = -0.03;
  couponPrice: number = 0;
  shippingPrice: number = 100;
  step: number = 1;

  constructor(private nav: NavController) {
    this.product = [
      { name: 'Car Charger 3.4A RCC-303 (Rose Gold)- REMAX', sku: 'D1600261', price: 100, sellPrice: 50, qty: 5, remain: 5, isSelected: false },
      { name: 'Car Charger Cable 2in1(RCC-103,Finchy,Gold) - REMAX', sku: 'D1600790', price: 100, sellPrice: 75, qty: 10, remain: 15, isSelected: false },
      { name: '2USB RCC201 Car Charger - REMAX', sku: 'D1400508', price: 799, sellPrice: 256, qty: 7, remain: 70, isSelected: false },
      { name: 'REMAX RA-USB Micro USB / Type-C Silver', sku: 'D1600584', price: 799, sellPrice: 256, qty: 500, remain: 555, isSelected: false }
    ];

    this.totalPrice = this.calculatePrice();

  }

  calculatePrice() {
    let sum = 0;
    for (var i = 0; i < this.product.length; i++) {
      sum += this.product[i].sellPrice * this.product[i].qty;
    }
    return sum;
  }

  setQuantity(product) {
    let alert = Alert.create({
      title: 'จำนวน (ชิ้น)',
      inputs: [
        {
          name: 'qty',
          placeholder: 'จำนวน',
          type: 'number',
          value: product.qty
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'ตกลง',
          handler: data => {
            product.qty = data.qty;
            if (product.qty <= 0) product.qty = 1;
            if (product.qty > product.remain) product.qty = product.remain;
            this.totalPrice = this.calculatePrice();
          }
        }
      ]
    });
    this.nav.present(alert);
  }

  updateQuantity(product, qty) {
    product.qty += qty;
    if (product.qty <= 0) product.qty = 1;
    if (product.qty > product.remain) product.qty = product.remain;
    this.totalPrice = this.calculatePrice();
  }

  removeProduct() {
    let count = 0;
    for (var i = 0; i < this.product.length; i++) {
      if (this.product[i].isSelected) count++;
    }
    if (count > 0) {
      let confirm = Alert.create({
        title: 'นำสินค้าออกจากรถเข็น ?',
        message: 'คุณต้องการนำสินค้าที่เลือก ' + count + ' ชิ้น<br>ออกจากรถเข็นสินค้าใช่หรือไม่ ?',
        buttons: [
          {
            text: 'ไม่ใช่',
            handler: () => {
            }
          },
          {
            text: 'ใช่',
            handler: () => {
              for (var i = 0; i < this.product.length; i++) {
                if (this.product[i].isSelected) {
                  this.product.splice(i, 1);
                  i--;
                }
              }
              this.totalPrice = this.calculatePrice();
            }
          }
        ]
      });
      this.nav.present(confirm);
    }
  }

  updateStep(step){
    this.step += step;
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
