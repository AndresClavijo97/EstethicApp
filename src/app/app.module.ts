import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreatePatientPage } from '../pages/create-patient/create-patient';
import { EditPatientPage } from "../pages/edit-patient/edit-patient";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataBaseSqliteProvider } from '../providers/data-base-sqlite/data-base-sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    CreatePatientPage,
    EditPatientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreatePatientPage,
    EditPatientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataBaseSqliteProvider
  ]
})
export class AppModule {}
