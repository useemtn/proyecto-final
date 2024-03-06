import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {
  info:any = ""
  characters:any = []
  constructor(private apiService: RickandmortyService) { }
  
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
