import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from 'src/app/interface/foto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public fotos: File | null = null;
  public fotoUrl: string = '';

  constructor() { }
  public async addNewToGallery():Promise<File | null> {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });



    // Convierte la imagen a un archivo blob
    const response = await fetch(capturedPhoto.webPath!);
    const blob = await response.blob();

    this.fotos = new File([blob], `foto_${new Date().getTime()}.jpeg`, {
      type: 'image/jpeg'
    });

    this.fotoUrl = capturedPhoto.webPath!;
    console.log("esta es la foto", this.fotos);
    return this.fotos;
  }
  public async getFoto(): Promise<File | null> {
    return await this.addNewToGallery();
  }
}
