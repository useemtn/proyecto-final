import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private url:string = 'https://rickandmortyapi.com/api/'
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url + 'character');
  }
  getByUrl(url: string) {
    return this.http.get(url);
  }
}
