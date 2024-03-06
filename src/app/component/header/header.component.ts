import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  search: string = '';
  components = [
    { name: 'Clima', routerLink: '/clima' },
    { name: 'GitHub', routerLink: '/github' },
    { name: 'Rick and Morty', routerLink: '/rickandmorty' },
    { name: 'Adivinanza', routerLink: '/adivinanza' },
  ];

  constructor(private router: Router) {}

  onSearch() {
    const component = this.components.find(c => c.name.toLowerCase() === this.search.toLowerCase());
    if (component) {
      this.router.navigate([component.routerLink]);
    } else {
      // handle the case when the search does not match any component
    }
  }
}