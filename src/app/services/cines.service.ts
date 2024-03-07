import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCines(page: number, perPage: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cines?page=${page}&perPage=${perPage}`);
  }

  addCine(cine: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cines`, cine);
  }

  deleteCine(id: number): Observable<any> {
    return this.http.delete<null>(`${this.apiUrl}/cines/${id}`);
  }
}
