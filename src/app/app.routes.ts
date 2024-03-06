import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [

{path: '', component:HomeComponent, title: 'Inicio'},
{path: 'clima', component:ClimaComponent, title: 'Clima'},
{path: 'profile', component:ProfileComponent, title: 'Github'},

{path: '**',redirectTo: '',pathMatch:'full' },

];
