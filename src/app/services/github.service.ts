import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // Inyectamos la clase HttpClient para realizar peticiones HTTP.
  private _http = inject(HttpClient);
  
  // Defino la URL base de la API de Github.
  private urlBase:string = 'https://api.github.com/users';
  
  // Creo un método para buscar un usuario en la API de Github.
  buscarUsuario(username: string): Observable<any> {
    // Realizo una petición GET a la API de Github con el nombre de usuario proporcionado.
    return this._http.get(`${this.urlBase}/${username}`);
  }
  
  // Crea un método para procesar los datos devueltos por la API de Github.
  procesarDatosGithub(data: any): any {
    // Devuelvo un objeto con los datos.
    return {
      nombre: data.login, 
      img: data.avatar_url,
      followers: data.followers, 
      following: data.following, 
      admin: data.site_admin, 
      enlace: data.html_url 
    }
  }
  
  constructor() { }
}
