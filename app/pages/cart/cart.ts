import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/cart/cart.html',
})
export class CartPage {

  product: Array<{ name: string, sku: string, price: number, sellPrice: number, qty: number, remain: number, isSelected: boolean }>;
  address: Array<{ id: string, firstname: string, lastname: string, contactName: string, mobile: string, isSelected: boolean }>;
  addressSelected: any;
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

    this.address = [
      { id: '1', firstname: 'Itthipon', lastname: 'Ampracha', contactName: 'Erb', mobile: '0879654128', isSelected: false },
      { id: '2', firstname: 'อิทธิพล', lastname: 'แอมประชา', contactName: 'เอิบ', mobile: '0876874512', isSelected: true }
    ];
    this.getSelectedAddress();

    this.totalPrice = this.calculatePrice();

  }

  calculatePrice() {
    let sum = 0;
    for (var i = 0; i < this.product.length; i++) {
      sum += this.product[i].sellPrice * this.product[i].qty;
    }
    return sum;
  }

  getSelectedAddress() {
    for (var i = 0; i < this.address.length; i++) {
      if (this.address[i].isSelected) {
        this.addressSelected = this.address[i];
        break;
      }
    }
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

  updateStep(step) {
    this.step += step;
  }

  updateName() {
    let alert = Alert.create({
      title: 'ชื่อผู้รับในการจัดส่งสินค้า',
      inputs: [
        {
          name: 'firstname',
          placeholder: 'ชื่อ',
          type: 'text',
          value: this.addressSelected.firstname
        },
        {
          name: 'lastname',
          placeholder: 'นามสกุล',
          type: 'text',
          value: this.addressSelected.lastname
        },
        {
          name: 'contactName',
          placeholder: 'ชื่อผู้ติดต่อ',
          type: 'text',
          value: this.addressSelected.contactName
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
            this.addressSelected.firstname = data.firstname;
            this.addressSelected.lastname = data.lastname;
            this.addressSelected.contactName = data.contactName;
          }
        }
      ]
    });
    this.nav.present(alert);
  }

  updateMobile() {
    let alert = Alert.create({
      title: 'เบอร์โทรศัพท์',
      inputs: [
        {
          name: 'mobile',
          placeholder: 'เบอร์โทรศัพท์',
          type: 'tel',
          value: this.addressSelected.mobile
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
            this.addressSelected.mobile = data.mobile;
          }
        }
      ]
    });
    this.nav.present(alert);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  mobileNumberFormat(mobile) {
    return mobile.substr(0, 3)+'-'+mobile.substr(3, 4)+'-'+mobile.substr(7, 3);
  }

}
