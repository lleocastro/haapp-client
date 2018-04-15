import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { PeoplesPage } from '../peoples/peoples';
import { DiscoverPage } from '../discover/discover';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chat = ChatPage;
  peoples = PeoplesPage;
  discover = DiscoverPage;

  constructor() {}

}
