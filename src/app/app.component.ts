import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Foody';
  hideHeader = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.hideHeader = this.router.url.includes('/auth-page'); // Adjust the path as needed
    });
  }
}
