import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonMenuButton, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonNote, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pin, trashOutline, share, } from 'ionicons/icons';
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
  private listaUser: User[] = this.datos.getList();

  constructor(private datos: DatosAppService) {
    addIcons({ pin, share, trashOutline });
    this.datos.ListUser();

  }

  public getList(): User[] {
    this.listaUser = this.datos.getList();

    return this.listaUser ;
  }

  borrarContacto(id: number) {
    console.log("borrandooo..." + id);
    this.datos.deleteUser(id);
  }
 ngOnInit(): void {
     this.datos.ListUser();
 }
}
