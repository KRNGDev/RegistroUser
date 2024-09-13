import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonMenuButton, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonNote, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pin, trash, share, } from 'ionicons/icons';
import { ApiusrService } from '../service/api-usr/apiusr.service';
import { User } from '../interface/user';
import { DatosAppService } from '../service/datosApp/datos-app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonNote, IonButtons, IonMenuButton, IonCardContent, CommonModule, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonAvatar, IonItem, IonItemSliding, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private listaUser: User[] = [];

  constructor(private datos: DatosAppService) {
    addIcons({ pin, share, trash });

  }

  public getList(): User[] {
    return this.listaUser = this.datos.getList();
  }

  ngOnInit(): void {

  }
}
