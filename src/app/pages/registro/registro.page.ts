import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline, camera } from 'ionicons/icons';
import { IonContent, IonThumbnail, IonMenuButton, IonSelectOption, IonSelect, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonList, IonIcon, IonAvatar, IonButtons, IonFab, IonFabButton, IonGrid, IonRow, IonCol, IonImg, IonInput } from '@ionic/angular/standalone';
import { ApiusrService } from 'src/app/service/api-usr/apiusr.service';
import { User } from 'src/app/interface/user';
import { PhotoService } from 'src/app/service/photo/photo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonInput, IonThumbnail, IonImg, IonCol, IonRow, IonGrid, IonFabButton, IonFab, IonButtons, IonMenuButton, IonAvatar, IonIcon, IonList, IonButton, IonSelect, IonSelectOption, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage {
  user: User = {} as User;

  constructor(private dataUser: ApiusrService, public photoService: PhotoService) {
    addIcons({ arrowBackOutline });
  }


  selectPhoto() {
    this.photoService.getFoto();
  }
  submitForm(user: User) {
    user.imagenurl = this.photoService.fotos;
    this.dataUser.setUser(user);
    user = {} as User;

  }
}
