import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [],
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css'
})
export class RickandmortyComponent {
  constructor(apiService: RickandmortyService) { }
  info:any = ""
  characters:any = []
  ngOnInit(): void {
    this.apiService.get().subscribe((r:any)=>{
      this.characters = r.results
      this.info = r.info
    })
  }
  redirectTo(url:string){
    this.apiService.getByUrl(url).subscribe((r:any)=>{
      console.log(r.results)
      this.characters = r.results
      this.info = r.info
    })
  }
}
