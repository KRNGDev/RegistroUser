import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonCard, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { DatosAppService } from 'src/app/service/datosApp/datos-app.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonIcon, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FichaPage implements OnInit {
  private idUser: string = '';
  private activatedRoute = inject(ActivatedRoute);


  constructor(private datos: DatosAppService) { }

  getDetalleUser(): User | undefined {
    console.log(this.idUser);
    const usuario = this.datos.getList().find(user => user.id === Number(this.idUser));
    console.log(usuario);
    return usuario;
  }


  ngOnInit() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getDetalleUser();
  }

}
