import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { BubblePage } from '../pages/chat/bubble/bubble';
import { PeoplesPage } from '../pages/peoples/peoples';
import { FormProfilePage } from '../pages/peoples/profile/form/form-profile';
import { SecretsPage } from '../pages/secrets/secrets';

import { FormAuthPage } from '../pages/auth/form/form-auth';
import { TabsPage } from '../pages/tabs/tabs';

import { UserProvider } from '../providers/auth/user';
import { ChatProvider } from '../providers/chat/chat';
import { SecretsProvider } from '../providers/secrets/secrets';

import { ConfigsPage } from '../pages/configs/configs';
import { ProfilePage } from '../pages/peoples/profile/profile';
import { QuotePage } from '../pages/secrets/quote/quote';
import { CommentsPage } from '../pages/secrets/comments/comments';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Network } from '@ionic-native/network';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
import { Crop } from '@ionic-native/crop';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    FormAuthPage,
    ChatPage,
    BubblePage,
    ProfilePage,
    PeoplesPage,
    SecretsPage,
    TabsPage,
    FormProfilePage,
    QuotePage,
    CommentsPage,
    ConfigsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormAuthPage,
    ChatPage,
    BubblePage,
    ProfilePage,
    PeoplesPage,
    SecretsPage,
    TabsPage,
    FormProfilePage,
    QuotePage,
    CommentsPage,
    ConfigsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    UserProvider,
    ChatProvider,
    SecretsProvider,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
