// app.component.ts
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
  btnClick: boolean = false;
  githubUser = '';
  private __githubService = inject(GithubService);
  datosGithub: any;
  getUser(){
    this.btnClick = true;
    this.__githubService.buscarUsuario(this.githubUser).subscribe(
      (data) => {
        this.datosGithub = this.__githubService.procesarDatosGithub(data);
      }
    )
  }
}
