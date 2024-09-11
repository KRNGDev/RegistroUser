import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const BASE_URL = environment.USR_BASE_URL;
const API_KEY = environment.USR_API_KEY;
@Injectable({
  providedIn: 'root'
})
export class ApiusrService {

  constructor() { }
}
