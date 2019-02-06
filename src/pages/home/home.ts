import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CreatePatientPage } from "../create-patient/create-patient";
import { EditPatientPage } from "../edit-patient/edit-patient";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  patients: any = [{first_name: 'Nombre del paciente', phone_number: 'Telefono celular'}];
  constructor(public navCtrl: NavController, public modalController: ModalController) {

  }

  goToCreatePatientPage(){
    this.navCtrl.push(CreatePatientPage);
  }

  getPatients($event){
    const valor = $event.target.value;
    console.log('valor del control' + valor);
  }

  edit(item){
    console.log("hola ");
    var modal = this.modalController.create(EditPatientPage);
    modal.present();
  }

  destroy(item){

  }

}
