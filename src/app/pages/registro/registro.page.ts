import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline, camera } from 'ionicons/icons';
import { IonContent, IonThumbnail, IonMenuButton, IonSelectOption, IonSelect, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonList, IonIcon, IonAvatar, IonButtons, IonFab, IonFabButton, IonGrid, IonRow, IonCol, IonImg, IonInput } from '@ionic/angular/standalone';
import { ApiusrService } from 'src/app/service/api-usr/apiusr.service';
import { User } from 'src/app/interface/user';
import { PhotoService } from 'src/app/service/photo/photo.service';
import { RedirectCommand, Router } from '@angular/router';
import { DatosAppService } from 'src/app/service/datosApp/datos-app.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonInput, IonThumbnail, IonImg, IonCol, IonRow, IonGrid, IonFabButton, IonFab, IonButtons, IonMenuButton, IonAvatar, IonIcon, IonList, IonButton, IonSelect, IonSelectOption, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage {
  user: User = {} as User;

  constructor(private router: Router, private datos: DatosAppService, private dataUser: ApiusrService, public photoService: PhotoService) {
    addIcons({ arrowBackOutline });
  }


  selectPhoto() {
    this.photoService.getFoto();
  }

  async submitForm(user: User) {
    const fotoFile = this.photoService.fotos;

    if (fotoFile) {
      const formData = new FormData();
      formData.append('file', fotoFile);  // Añadir la foto al FormData

      // Agregar los demás datos del usuario al FormData
      formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));

      console.error('No photo selected', formData);

      this.dataUser.setUser(formData).subscribe({
        next: (response) => {
          console.log('Guardado con éxito:', response);
          this.datos.ListUser();  // Actualizar la lista de usuarios
          this.router.navigate(['home']);  // Redirigir a la página principal
        },
        error: (err) => {
          console.error('Error al guardar:', err);
        }
      });
    } else {
      console.error('No photo selected');
    }
  }
}