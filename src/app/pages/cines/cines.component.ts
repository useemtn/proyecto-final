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

  ngOnInit(): void {
    this.cineService.getCines(0,100).subscribe(
      data => {
        this.cines = data.cines;
      }
    )
  }
  deleteCine(id: number){
    alert(id);
  }
}
