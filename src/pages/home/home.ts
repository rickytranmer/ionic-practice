import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchComponent } from './search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
