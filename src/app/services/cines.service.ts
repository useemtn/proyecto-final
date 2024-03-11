import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  // Indica que este servicio debe ser creado por el inyector raíz
  providedIn: 'root' 
})
export class CineService {
  // Defino la URL de la API (puerto en el que corre el json)
  private apiUrl = 'http://localhost:3000';

  // Inyecto el servicio HttpClient en el constructor para hacer solicitudes HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener los cines
  getCines(page: number, perPage: number): Observable<any> {
    // Hago una solicitud GET a la API para obtener los cines
    // La página y el número de cines por página se pasan como parámetros de consulta
    return this.http.get(`${this.apiUrl}/cines?page=${page}&perPage=${perPage}`);
  }

  // Método para añadir un cine
  addCine(cine: any): Observable<any> {
    // Hago una solicitud POST a la API para añadir un cine
    // El cine a añadir se pasa como cuerpo de la solicitud
    return this.http.post(`${this.apiUrl}/cines`, cine);
  }

  // Método para eliminar un cine
  deleteCine(id: number): Observable<any> {
    // Hago una solicitud DELETE a la API para eliminar un cine
    // El id del cine a eliminar se pasa como parte de la URL
    return this.http.delete<null>(`${this.apiUrl}/cines/${id}`);
  }
}
