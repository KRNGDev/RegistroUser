import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user';
const BASE_URL = environment.USR_BASE_URL;
const API_KEY = environment.USR_API_KEY;
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

}
