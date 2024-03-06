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

  ciudad: string = '';
  private _climaService = inject(ClimaService);
  datosClima:any;

  buscarCiudad() {
    this._climaService.buscarClima(this.ciudad).subscribe(
      (data) => {
        this.datosClima = this._climaService.procesarDatosClima(data);
      });
  }
 
  
}
