import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-code-editor',
  templateUrl: 'code-editor.html'
})
export class CodeEditorPage {
  constructor(private viewCtrl: ViewController) { }

  dismiss() {
    this.viewCtrl.dismiss({});
  }

}
