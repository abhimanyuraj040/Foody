import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isUserMenuOpen = false;

  constructor(private router: Router) {}

  goToCart() {
    this.router.navigate(['/cart-page']);
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout() {
    // Add your logout logic here
    console.log('User logged out');
    this.isUserMenuOpen = false;
  }

  // Add this to close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target as Element).closest('.user-section')) {
      this.isUserMenuOpen = false;
    }
  }
}
