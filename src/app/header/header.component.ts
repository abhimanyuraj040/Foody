import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUserMenuOpen = false;
  userName: string = 'User';

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.name || 'User';
  }

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

    console.log('User logged out');

    this.isUserMenuOpen = false;

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
