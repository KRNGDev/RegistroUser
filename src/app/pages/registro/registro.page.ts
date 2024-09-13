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
export class RegistroPage  {
  user: User = {  }as User;

  constructor(private dataUser: ApiusrService) {
    addIcons({ arrowBackOutline });
  }

  selectPhoto() {

  }
  submitForm(user:User) {
    this.dataUser.setUser(user);
    user={}as User;
    
  }
}
