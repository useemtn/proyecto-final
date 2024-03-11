import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  // Indica que este servicio debe ser creado por el inyector raíz
  providedIn: 'root' 
})
export class ClimaService {
  // Defino las variables que voy a usar en mi servicio
  private _http = inject(HttpClient); // Inyecto el servicio HttpClient para hacer solicitudes HTTP
  // URL base de la API del clima
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  // Clave de la API del clima
  private apiKey = '605507acf87117e111e54a3ab5238541'; 
   // Diferencia para convertir de Kelvin a Celsius
  private difKelvin = 273.15;

  // Método para buscar el clima de una ciudad
  buscarClima(ciudad: string): Observable<any> {
    // Hago una solicitud GET a la API del clima para obtener los datos del clima de la ciudad
    return this._http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`);
  }

  // Método para procesar los datos del clima obtenidos de la API
  procesarDatosClima(data: any): any {
    // Devuelvo un objeto con los datos del clima procesados
    return {
      ciudadNombre: data.name, 
      paisNombre: data.sys.country, 
      temperatura: Math.floor(data.main.temp - this.difKelvin),
      humedad: data.main.humidity, 
      descripcion: data.weather[0].description, 
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 
    };
  }
}
