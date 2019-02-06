import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePatientPage } from "../create-patient/create-patient";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  patients: any = [{first_name: 'Nombre del paciente', phone_number: 'Telefono celular'}];
  constructor(public navCtrl: NavController) {

  }

  goToCreatePatientPage(){
    this.navCtrl.push(CreatePatientPage);
  }

  getPatients($event){
    const valor = $event.target.value;
    console.log('valor del control' + valor);
  }

  edit(item){

  }

  destroy(item){

  }

}
