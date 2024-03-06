import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { RickandmortyComponent } from './pages/rickandmorty/rickandmorty.component';

export const routes: Routes = [

{path: '', component:HomeComponent, title: 'Inicio'},
{path: 'clima', component:ClimaComponent, title: 'Clima'},
{path: 'github', component:GithubComponent, title: 'Github'},
{path: 'rickandmorty', component:RickandmortyComponent, title: 'Rick And Morty'},

{path: '**',redirectTo: '',pathMatch:'full' },

];
