import { Component } from '@angular/core';
import { NavController, NavParams, Toast, Loading } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ProductInfoPage } from '../product-info/product-info';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {
  categoryName: string;
  categoryUrl: string;
  cartCount: number;
  productListData: any;

  constructor(private nav: NavController, private navParams: NavParams, private http: Http) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryUrl = this.navParams.get('categoryUrl');
    this.cartCount = 15;

    /*this.product = [
      { name: 'Car Charger 3.4A RCC-303 (Rose Gold)- REMAX', sku: 'D1600261', price: 799, sellPrice: 256, isFavorite: true },
      { name: 'Car Charger Cable 2in1(RCC-103,Finchy,Gold) - REMAX', sku: 'D1600790', price: 799, sellPrice: 256, isFavorite: false },
      { name: '2USB RCC201 Car Charger - REMAX', sku: 'D1400508', price: 799, sellPrice: 256, isFavorite: false },
      { name: 'REMAX RA-USB Micro USB / Type-C Silver', sku: 'D1600584', price: 799, sellPrice: 256, isFavorite: true }
    ];*/

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var param = "apiKey=TEST-IONIC&shop=POWERDDH-8888-8888-B620-48D3B6489999&type=byCategoryUrl4Web&value=" + this.categoryUrl;
    this.http.post('https://api.remaxthailand.co.th/product/info', param, { headers: headers })
      .map(res => res.json()).subscribe(data => {
        this.productListData = data.result;
      });
    /*let loading = Loading.create({
      content: "กำลังโหลดข้อมูล<br>กรุณารอสักครู่ค่ะ..."
    });
    this.nav.present(loading);*/
    //loading.dismiss();
  }

  navigate(productListData) {
    this.nav.push(ProductInfoPage, {
      productName: productListData.name,
      productSku: productListData.sku,
      productId: productListData.product
    });
  }

  goCart() {
    this.nav.parent.select(1);
    this.nav.pop();
  }

  updateFavorite(productListData) {
    productListData.isFavorite = !productListData.isFavorite;
    let toast = Toast.create({
      message: (productListData.isFavorite ? 'เพิ่ม' : 'ยกเลิก') + 'รายการที่ชื่นชอบเรียบร้อยแล้ว',
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
