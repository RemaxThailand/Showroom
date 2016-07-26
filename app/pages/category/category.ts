import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'build/pages/category/category.html',
})
export class CategoryPage {

  category: Array<{ title: string, note: string, thumbnail: string }>;

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
  }

  navigate(category) {
    this.nav.push(ProductListPage, {
      categoryName: category.title,
      categoryUrl: category.thumbnail
    });
  }

}
