import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-code-editor',
  templateUrl: 'code-editor.html'
})
export class CodeEditorPage {
  constructor(private viewCtrl: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  dismiss() {
    this.viewCtrl.dismiss({});
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
