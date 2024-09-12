import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonMenu, IonMenuToggle, IonMenuButton, IonRouterOutlet, IonSplitPane, IonContent, IonList, IonListHeader, IonNote, IonItem, IonLabel, IonIcon, IonFooter, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, exit, exitOutline, exitSharp, search, searchCircle, searchOutline, searchSharp, searchCircleOutline, searchCircleSharp, library, libraryOutline, librarySharp, planet, planetOutline, planetSharp, home, homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTitle, RouterLink, RouterLinkActive, IonMenu, IonMenuToggle, IonFooter, IonIcon, IonLabel, IonItem, IonNote, IonListHeader, IonList, IonContent, FormsModule, CommonModule, IonMenuButton, IonSplitPane, IonApp, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista', url: 'home', icon: 'home' },
    { title: 'Registro', url: 'registro', icon: 'search' },
    { title: 'Mi lista', url: '/pages/milista', icon: 'library' },
  ];
  constructor() {
    addIcons({ mailOutline, exit, exitOutline, exitSharp, search, searchCircle, searchOutline, searchSharp, searchCircleOutline, searchCircleSharp, library, libraryOutline, librarySharp, planet, planetOutline, planetSharp, home, homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
