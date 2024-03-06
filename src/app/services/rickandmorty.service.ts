import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://rickandmortyapi.com/api/');
  }
  getByUrl(url: string) {
    return this.http.get(url);
  }
}
