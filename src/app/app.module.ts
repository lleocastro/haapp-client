import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { BubblePage } from '../pages/chat/bubble/bubble';
import { PeoplesPage } from '../pages/peoples/peoples';
import { DiscoverPage } from '../pages/discover/discover';
import { TabsPage } from '../pages/tabs/tabs';

import { UserProvider } from '../providers/auth/user';
import { ChatProvider } from '../providers/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    BubblePage,
    PeoplesPage,
    DiscoverPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    BubblePage,
    PeoplesPage,
    DiscoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    ChatProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
