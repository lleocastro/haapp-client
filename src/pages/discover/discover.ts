import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  relationship: any;

  constructor(public navCtrl: NavController) {
    this.relationship = 'feed';
  }

  segmentChanged(e) {
    console.log(e, this.relationship);
  }

}
