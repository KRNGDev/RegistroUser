import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { IonContent, IonMenuButton, IonSelectOption, IonSelect, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonList, IonIcon, IonAvatar, IonButtons } from '@ionic/angular/standalone';
import { ApiusrService } from 'src/app/service/api-usr/apiusr.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonAvatar, IonIcon, IonList, IonButton, IonSelect, IonSelectOption, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {
  user: User = {
    'nombre': '',
    'apellido': '',


    'email': '',
    'telefono': '',
    'imagenurl': ''
  }
  nombre: string = '';
  apellidos: string = '';
  direccion: string = '';
  disciplina: string = '';
  email: string = '';
  telefono: string = '';
  imagenurl: string = '';

  constructor(private dataUser: ApiusrService) {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {
  }
  selectPhoto() {

  }
  submitForm() {
    this.dataUser.setUser()
    console.log(this.nombre, this.apellidos, this.direccion, this.disciplina,)
  }
}
