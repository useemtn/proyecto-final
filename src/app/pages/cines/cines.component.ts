// src/app/mi-componente.component.ts

import { Component, OnInit } from '@angular/core';
import { CinesService } from '../../services/cines.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
})
export class MiComponenteComponent implements OnInit {
  constructor(private cinesService: CinesService) {}

  ngOnInit(): void {
    this.cinesService.getCines().subscribe((cines) => {
      console.log('Lista de cines:', cines);
    });
  }
}
