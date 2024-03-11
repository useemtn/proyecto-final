// Importamos los módulos necesarios de Angular
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Defino las propiedades del componente
@Component({
  selector: 'app-header',
  // Indica que este componente puede existir de forma independiente
  standalone: true, 
  // Importo los módulos necesarios para este componente
  imports: [RouterLink, FormsModule], 
  templateUrl: './header.component.html', 
  styleUrl: './header.component.css' 
})
export class HeaderComponent {
  // Una cadena que almacena el valor de búsqueda del usuario
  search: string = '';
  // Un array de objetos, cada objeto representa un componente de la barra de navegación
  components = [ 
    { name: 'Clima', routerLink: '/clima' },
    { name: 'GitHub', routerLink: '/github' },
    { name: 'Rick and Morty', routerLink: '/rickandmorty' },
    { name: 'Adivinanza', routerLink: '/adivinanza' },
    { name: 'Calculadora', routerLink: '/calculator'},
    { name: 'Cines', routerLink: '/cines'},
    { name: 'Tic Tac Toe', routerLink: '/tictactoe'},
  ];

  //  Inyecto una instancia de Router para manejar la navegación
  constructor(private router: Router) {} 
  // Este método se ejecuta cuando el usuario realiza una búsqueda
  onSearch() { 
    // Busca el componente que coincide con la búsqueda del usuario y lo convierte a minúsculas
    const component = this.components.find(c => c.name.toLowerCase() === this.search.toLowerCase()); 
    if (component) {
      // Si encuentra el componente, navega a ese componente
      this.router.navigate([component.routerLink]); 
    } else {
      // Si no encuentra el componente, no hace nada
    }
  }
}
