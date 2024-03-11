import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty', 
  templateUrl: './rickandmorty.component.html', 
  styleUrls: ['./rickandmorty.component.css'] 
})
export class RickandmortyComponent implements OnInit {
  // Defino las variables que voy a usar en mi componente
  info:any = "" 
  characters:any = [] 

  // Inyecto el servicio RickandmortyService en el constructor
  constructor(private apiService: RickandmortyService) { }

  // Método que se ejecuta cuando se inicializa el componente
  // OnInit es para que al cargar la página se carguen los datos
  ngOnInit(): void {
    // Llamo al método get del servicio RickandmortyService para obtener los personajes
    this.apiService.get().subscribe((r:any)=>{
      // Almaceno los personajes obtenidos en la variable characters
      this.characters = r.results
      // Almaceno la información obtenida en la variable info
      this.info = r.info
    })
  }

  // Método para redirigir a una URL
  redirectTo(url:string){
    // Llamo al método getByUrl del servicio RickandmortyService para obtener los datos de la URL
    this.apiService.getByUrl(url).subscribe((r:any)=>{
      // Muestro los resultados obtenidos en la consola
      console.log(r.results)
      // Almaceno los personajes obtenidos en la variable characters
      this.characters = r.results
      // Almaceno la información obtenida en la variable info
      this.info = r.info
    })
  }
}
