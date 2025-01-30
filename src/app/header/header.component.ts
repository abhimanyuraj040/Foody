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

  goToMyAccount() {
    this.router.navigate(['/my-account']);
  }

  goToAuthPage() {
    this.router.navigate(['/auth-page']);
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');

    // Log the action
    console.log('User logged out');

    // Close user menu if open
    this.isUserMenuOpen = false;

    // Redirect to the login/auth page
    this.router.navigate(['/auth-page']);
  }

  // Add this to close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target as Element).closest('.user-section')) {
      this.isUserMenuOpen = false;
    }
  }
}
