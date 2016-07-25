import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {

  category: Array<{title: string, note: string, thumbnail: string}>;

  constructor(private nav: NavController) {
    this.category = [
      { title: 'New Arrivals', note: 'สินค้าใหม่', thumbnail: 'https://src.remaxthailand.co.th/img/category/new_arrivals/1.jpg' },
      { title: 'Clearance', note: 'สินค้าราคาพิเศษ', thumbnail: 'https://src.remaxthailand.co.th/img/category/clearance/1.jpg' },
      { title: 'Adapter', note: 'หัวแปลงไฟฟ้า', thumbnail: 'https://src.remaxthailand.co.th/img/category/adapter/1.jpg' },
      { title: 'Bag', note: 'กระเป๋า', thumbnail: 'https://src.remaxthailand.co.th/img/category/bag/1.jpg' },
      { title: 'Cable', note: 'สายชาร์จ', thumbnail: 'https://src.remaxthailand.co.th/img/category/cable/1.jpg' },
      { title: 'Power Bank', note: 'แบตเตอรี่สำรอง', thumbnail: 'https://src.remaxthailand.co.th/img/category/power_bank/1.jpg' }
    ];

  }

}
