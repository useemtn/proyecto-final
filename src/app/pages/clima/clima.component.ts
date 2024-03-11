import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clima', 
  templateUrl: './clima.component.html', 
  styleUrls: ['./clima.component.css'], 
  standalone: true, 
  imports: [FormsModule], 
})
export class ClimaComponent  {
  // Defino las variables que voy a usar en mi componente
  ciudad: string = ''; 
  datosClima:any; 
  // Inyecto el servicio ClimaService en el constructor
  private _climaService = inject(ClimaService);

  // Método para buscar el clima de una ciudad
  buscarCiudad() {
    // Llamo al método buscarClima del servicio ClimaService para obtener los datos del clima
    this._climaService.buscarClima(this.ciudad).subscribe(
      (data) => {
        // Almaceno los datos del clima obtenidos en la variable datosClima
        this.datosClima = this._climaService.procesarDatosClima(data);
      });
  }
}
