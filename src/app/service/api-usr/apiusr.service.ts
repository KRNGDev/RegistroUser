import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user';

const BASE_URL = environment.USR_BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiusrService {

  private http = inject(HttpClient);
  public usuarios: any[] = [];

  constructor() { }

 

  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}`);

  }
  
  setUser(body:User){
    console.log("Cuerpo",body);
    this.http.post(BASE_URL,body).subscribe({
      next: (response) => {
        // Petición exitosa
        console.log('Guardado con éxito:', response);
      },
      error: (err) => {
        // Ocurrió un error
        console.error('Error al guardar:', err);
      },
      complete: () => {
        console.log('Petición finalizada');
      }
    });;
    
  }

}
