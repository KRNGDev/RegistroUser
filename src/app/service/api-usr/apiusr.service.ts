import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user';
import { DatosAppService } from '../datosApp/datos-app.service';

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

  
  setUser(body: FormData): Observable<any> {
    return this.http.post(BASE_URL, body);
  }

  delete(id:number): Observable<any>{
   return this.http.delete(`${BASE_URL}/${id}`,{ responseType: 'text' });
  }

}
