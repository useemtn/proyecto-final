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
  cines : any[] = [];
  constructor (private cineService: CineService) { }
  nombre: string = ''
  direccion: string = ''

  ngOnInit(): void {
    this.cineService.getCines(0,100).subscribe(
      data => {
        this.cines = data.cines;
      }
    )
  }
  deleteCine(id: number){
    this.cineService.deleteCine(id).subscribe(
      () => {
        this.cines = this.cines.filter(cine => cine.id !== id);
      }
    )
  }
  addCine() {
    this.cineService.addCine({ nombre : this.nombre , direccion : this.direccion }).subscribe(
      cine => {
        this.cines.push(cine);
        this.nombre = '';
        this.direccion = '';
      }
    )
  }
}
