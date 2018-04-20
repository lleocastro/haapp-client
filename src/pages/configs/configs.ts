import { Component } from '@angular/core';

@Component({
  templateUrl: 'configs.html'
})
export class ConfigsPage {
  protected tabBarElement: any;

  constructor() {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
