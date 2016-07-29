import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { CartPage } from '../cart/cart';
import { FavoritePage } from '../favorite/favorite';
import { HistoryPage } from '../history/history';


@Component({
  template: `
    <ion-header>
      <ion-navbar dark>
	    <button menuToggle>
	      <ion-icon name="menu"></ion-icon>
	    </button>
        <ion-title>สินค้า</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
class TabIconTextPage {
}


@Component({
  template: `
	<ion-tabs class="tabs-icon" primary>
		<ion-tab tabIcon="ios-keypad" [root]="tabProduct"></ion-tab>
		<ion-tab tabIcon="md-cart" [root]="tabCart" tabBadge="6" tabBadgeStyle="danger"></ion-tab>
		<ion-tab tabIcon="md-star" [root]="tabFavorite"></ion-tab>
		<ion-tab tabIcon="md-time" [root]="tabHistory"></ion-tab>
	</ion-tabs>
`})
export class ProductPage {
  tabProduct = CategoryPage;
  tabCart = CartPage;
  tabFavorite = FavoritePage;
  tabHistory = HistoryPage;
}

/*
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
*/
