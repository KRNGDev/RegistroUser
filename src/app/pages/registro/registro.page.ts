import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelectOption, IonSelect, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonList, IonButton, IonSelect, IonSelectOption, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  direccion: string = '';
  disciplina: string = '';
  email: string = '';
  telefono: string = '';
  imagenurl: string = '';

  constructor() { }

  ngOnInit() {
  }
  selectPhoto() {

  }
  submitForm() {

    console.log(this.nombre, this.apellidos, this.direccion, this.disciplina,)
  }
}
