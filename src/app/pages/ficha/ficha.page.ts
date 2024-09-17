import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonCard, IonButton, IonItem, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonAvatar, IonChip } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { DatosAppService } from 'src/app/service/datosApp/datos-app.service';
import { User } from 'src/app/interface/user';
import { addIcons } from 'ionicons';
import { mailOutline,arrowBackOutline, exit, exitOutline, exitSharp, search, searchCircle, searchOutline, searchSharp, searchCircleOutline, searchCircleSharp, library, libraryOutline, librarySharp, planet, planetOutline, planetSharp, home, homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, personOutline, locationOutline, callOutline } from 'ionicons/icons';


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
  standalone: true,
  imports: [IonChip, IonAvatar, IonLabel, IonCardContent, IonCardTitle, IonCardHeader, IonItem, IonButton, IonCard, IonIcon, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FichaPage implements OnInit {
  private idUser: string = '';
  private activatedRoute = inject(ActivatedRoute);


  constructor(private datos: DatosAppService,private location: Location) {
    addIcons({arrowBackOutline,personOutline,locationOutline,callOutline,mailOutline,exit,exitOutline,exitSharp,search,searchCircle,searchOutline,searchSharp,searchCircleOutline,searchCircleSharp,library,libraryOutline,librarySharp,planet,planetOutline,planetSharp,home,homeOutline,homeSharp,mailSharp,paperPlaneOutline,paperPlaneSharp,heartOutline,heartSharp,archiveOutline,archiveSharp,trashOutline,trashSharp,warningOutline,warningSharp,bookmarkOutline,bookmarkSharp});
   }

  getDetalleUser(): User | undefined {
    console.log(this.idUser);
    const usuario = this.datos.getList().find(user => user.id === Number(this.idUser));
    console.log(usuario);
    return usuario;
  }
  pagAtras() {
    this.location.back();
  }


  ngOnInit() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getDetalleUser();
    
  }

}
