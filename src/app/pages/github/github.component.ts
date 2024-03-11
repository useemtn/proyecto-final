import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-root', 
  standalone: true, 
  imports : [
    FormsModule 
  ],
  templateUrl: './github.component.html', 
  styleUrls: ['./github.component.css'] 
})
export class GithubComponent {
  // Defino las variables que voy a usar en mi componente
  btnClick: boolean = false; 
  githubUser:string = ''; 
  datosGithub: any; 

  // Inyecto el servicio GithubService en el constructor
  private __githubService = inject(GithubService);

  // Método para obtener los datos de un usuario de GitHub
  getUser(){
    // Establezco btnClick a verdadero
    this.btnClick = true;
    // Llamo al método buscarUsuario del servicio GithubService para obtener los datos del usuario
    this.__githubService.buscarUsuario(this.githubUser).subscribe(
      (data) => {
        // Almaceno los datos del usuario obtenidos en la variable datosGithub
        this.datosGithub = this.__githubService.procesarDatosGithub(data);
      }
    )
  }
}
