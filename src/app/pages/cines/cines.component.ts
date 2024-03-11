import { Component, OnInit } from '@angular/core';
import { CineService } from '../../services/cines.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cines', 
  standalone: true, 
  imports: [ FormsModule], 
  templateUrl: './cines.component.html', 
  styleUrls: ['./cines.component.css'] 
})
export class CinesComponent implements OnInit {
  // Defino las variables que voy a usar en mi componente
  cines : any[] = []; 
  nombre: string = '';
  direccion: string = '';

  // Inyecto el servicio CineService en el constructor
  constructor (private cineService: CineService) { }

  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    // Llamo al método getCines del servicio CineService y obtengo los cines
    this.cineService.getCines(0,100).subscribe(
      data => {
        // Almaceno los cines obtenidos en la variable cines
        this.cines = data.cines;
      }
    )
  }

  // Método para eliminar un cine
  deleteCine(id: number){
    // Llamo al método deleteCine del servicio CineService para eliminar el cine
    this.cineService.deleteCine(id).subscribe(
      () => {
        // Actualizo la variable cines para reflejar la eliminación del cine
        this.cines = this.cines.filter(cine => cine.id !== id);
      }
    )
  }

  // Método para añadir un cine
  addCine() {
    // Llamo al método addCine del servicio CineService para añadir el cine
    this.cineService.addCine({ nombre : this.nombre , direccion : this.direccion }).subscribe(
      cine => {
        // Añado el cine a la variable cines
        this.cines.push(cine);
        // Limpio las variables nombre y direccion
        this.nombre = '';
        this.direccion = '';
      }
    )
  }
}
