import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from 'src/app/interface/foto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public fotos: string = '';

  constructor() { }
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.fotos = capturedPhoto.webPath!;
    console.log("esta es la foto", this.fotos);
  }
  getFoto(): string {
    this.addNewToGallery();
    return this.fotos;
  }
}
