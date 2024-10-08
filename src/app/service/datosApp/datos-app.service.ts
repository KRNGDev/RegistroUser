import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/user';
import { ApiusrService } from '../api-usr/apiusr.service';

@Injectable({
  providedIn: 'root'
})
export class DatosAppService {
  private listaUser: User[] = [];

  constructor(private http: ApiusrService) {

    this.ListUser();
  }

  ListUser() {
    try {
      this.http.getListUser().subscribe(list => {
        if (list) {
          this.listaUser = list;
          return this.listaUser;
        } else {
          throw Error("Hubo un fallo en la carga")
        }
      });
    } catch (error) {
      throw Error("fallo en la conexion error: " + error);
    }
  }
  deleteUser(id:number){
    this.http.delete(id).subscribe({
      next:(response)=>{
        console.log('Usuario eliminado exitosamente', response);
       this.ListUser();
      },
      error: (error) => {
        console.error('Error al eliminar el usuario', error);
        // Manejo de errores
      }
    });
  }
  getList(): User[] {
    return this.listaUser;
  }
}
