import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';
import { CartPage } from '../cart/cart';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/category/category.html',
})

export class CategoryPage {
  categoryData: any;
  constructor(private nav: NavController, private http: Http) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var param = "apiKey=TEST-IONIC&shop=POWERDDH-8888-8888-B620-48D3B6489999";
    this.http.post('https://api.remaxthailand.co.th/category/info', param, { headers: headers })
      .map(res => res.json()).subscribe(data => {
        this.categoryData = data.result;
        //sconsole.log(this.category)
      });
  }

  /*  category: Array<{ title: string, note: string, thumbnail: string }>;

    constructor(private nav: NavController) {
      this.category = [
        { title: 'New Arrivals', note: 'สินค้าใหม่', thumbnail: 'https://src.remaxthailand.co.th/img/category/new_arrivals/1.jpg' },
        { title: 'Storage & Memory Card', note: 'สินค้าราคาพิเศษ', thumbnail: 'https://src.remaxthailand.co.th/img/category/clearance/1.jpg' },
        { title: 'Adapter', note: 'หัวแปลงไฟฟ้า', thumbnail: 'https://src.remaxthailand.co.th/img/category/adapter/1.jpg' },
        { title: 'Bag', note: 'กระเป๋า', thumbnail: 'https://src.remaxthailand.co.th/img/category/bag/1.jpg' },
        { title: 'Cable', note: 'สายชาร์จ', thumbnail: 'https://src.remaxthailand.co.th/img/category/cable/1.jpg' },
        { title: 'Power Bank', note: 'แบตเตอรี่สำรอง', thumbnail: 'https://src.remaxthailand.co.th/img/category/power_bank/1.jpg' }
      ];
      //this.nav.parent.select(2);
    }*/

  navigate(categoryData) {
    if (categoryData = 'new') {
      this.nav.push(ProductListPage, {
        categoryName: 'New Arrivals',
        categoryUrl: 'new'
      });
    } else {
      this.nav.push(ProductListPage, {
        categoryName: categoryData.name,
        categoryUrl: categoryData.url
      });
    }

  }

}
