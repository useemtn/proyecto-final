import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  // Defino la URL base de la API de Rick and Morty.
  private url:string = 'https://rickandmortyapi.com/api/'

  // Inyecto la clase HttpClient para realizar peticiones HTTP.
  constructor(private http: HttpClient) { }

  // Creo un método que obtiene los personajes
  get() {
    // Realizo una petición GET a la API de Rick and Morty
    return this.http.get(this.url + 'character');
  }

  // Creo un método que obtiene los personajes por su URL
  getByUrl(url: string) {
    // Realizo una petición GET a la URL proporcionada.
    return this.http.get(url);
  }
}
