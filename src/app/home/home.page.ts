import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pin, trash, share } from 'ionicons/icons';
import { ApiusrService } from '../service/api-usr/apiusr.service';
import { User } from '../interface/user';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardContent, CommonModule, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonAvatar, IonItem, IonItemSliding, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private listaUser: User[] = [];
  constructor(private http: ApiusrService) {
    addIcons({ pin, trash, share });
    this.cargarListUser();
  }

  cargarListUser() {
    this.http.getListUser().subscribe(list => {
      this.listaUser = list;

    })
  }
  public getList(): User[] {
    return this.listaUser;
  }

  ngOnInit(): void {

  }
}
