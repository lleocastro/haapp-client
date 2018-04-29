import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { PeoplesPage } from '../peoples/peoples';
import { SecretsPage } from '../secrets/secrets';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chat = ChatPage;
  peoples = PeoplesPage;
  secrets = SecretsPage;

  chatIcon: string;
  peopleIcon: string;
  secretsIcon: string;

  constructor() {
    this.tabSelected(1);
  }

  ionViewDidEnter() { }

  tabSelected(index) {
    this.resetTabIcons();

    switch(index) {
      case 1:
        this.chatIcon = 'ios-chatbubbles';
        break;
      case 2:
        this.peopleIcon = 'md-people';
        break;
      case 3:
        this.secretsIcon = 'md-flame';
        break;
    }
  }

  private resetTabIcons(): void {
    this.chatIcon = 'ios-chatbubbles-outline';
    this.peopleIcon = 'ios-people-outline';
    this.secretsIcon = 'ios-flame-outline';
  }

}
