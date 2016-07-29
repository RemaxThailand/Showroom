import { Component } from '@angular/core';
import { NavController, NavParams, Toast } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/product-info/product-info.html',
})
export class ProductInfoPage {
  productName: string;
  productSku: string;
  productId: number;
  //productData = {};
  productDetail = [];
  productProperties = [];
  productHowTo = [];
  productInbox = [];
  image = [];
  imageDetail = [];
  items = [];
  loadFinish: boolean = false;
  qty: number = 1;
  qtyRemain: number = 0;
  isFavorite: boolean = false;
  discountPercent: number;
  warranty: number;
  warrantyYear: boolean = false;
  warrantyMonth: boolean = false;
  warrantyDay: boolean = false;

  productData: Array<{ shop: string, name: string, brand: string, sku: string, price: number, price1: number, price2: number, price3: number, price4: number, price5: number, isPromotion: boolean, pricePromotion: number, stock: number, width: number, length: number, weight: number, grossWeight: number, color: string, material: string, model: string, chargeType: string, deviceSupport: string, standard: string, madeIn: string, tag: string, label: string, rating: number, reviewCount: number, viewCount: number, warranty: number, active: boolean, visible: boolean, cover: string, image: Array<{any}>, imageDetail: Array<{any}>, detail: Array<{any}>, inBox: Array<{any}>, howToUse: Array<{any}>, specialProperties: Array<{any}> }>;

  constructor(private nav: NavController, private navParams: NavParams, private http: Http) {
    this.productName = this.navParams.get('productName');
    this.productSku = this.navParams.get('productSku');
    this.productId = this.navParams.get('productId');

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var param = "apiKey=TEST-IONIC&shop=POWERDDH-8888-8888-B620-48D3B6489999&type=item&value=" + this.productId;
    this.http.post('https://api.remaxthailand.co.th/product/info', param, { headers: headers })
      .map(res => res.json()).subscribe(data => {
        this.productData[0] = data.result;
        console.log(this.productData[0]);
        this.image = data.result.image;
        this.imageDetail = data.result.imageDetail;
        this.discountPercent = Math.round(data.result.price1 * 100 / data.result.price);
        if (data.result.warranty >= 365)
          this.warranty = data.result.warranty / 365;
        else if (data.result.warranty >= 30)
          this.warranty = data.result.warranty / 30;
        else
          this.warranty = data.result.warranty;
        this.qtyRemain = data.result.stock;
        this.productDetail = data.result.detail;
        this.productProperties = data.result.specialProperties;
        this.productHowTo = data.result.howToUse;
        this.productInbox = data.result.inBox;
      });

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
      message: 'เพิ่มสินค้าลงในรถเข็น ' + this.qty + ' ชิ้น เรียบร้อยแล้ว',
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
      if (this.imageDetail != undefined) {
        this.items.push(this.imageDetail[this.items.length]);
        this.loadFinish = this.items.length == this.imageDetail.length;
        infiniteScroll.complete();
      } else {
        infiniteScroll.complete();
      }
    }, 500);
  }

}
