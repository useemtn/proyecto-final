import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinesService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto según la URL de tu servidor

  constructor(private http: HttpClient) {}

  getCines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cines`);
  }

  addCine(cine: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cines`, cine);
  }

  deleteCine(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cines/${id}`);
  }
}
