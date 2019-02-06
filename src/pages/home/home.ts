import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePatientPage } from "../create-patient/create-patient";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCreatePatientPage(){
    this.navCtrl.push(CreatePatientPage);
  }


}
