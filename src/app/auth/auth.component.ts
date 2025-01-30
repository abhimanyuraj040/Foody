import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  isLoginMode = true; // Toggle between login and signup
  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    // Initialize login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false], // Remember me checkbox
    });

    // Initialize signup form
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Switch between login and signup modes
  switchMode(loginMode: boolean): void {
    this.isLoginMode = loginMode;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.isLoginMode) {
      console.log('Login Form Submitted:', this.loginForm.value);

      const storedUser = localStorage.getItem('user');
      if(storedUser){
        const userData = JSON.parse(storedUser);

        if (
          this.loginForm.value.email === userData.email &&
          this.loginForm.value.password === userData.password
        ) {
          alert("Welcome back!!!");
          this.router.navigate(['/home']);
        } else {
          alert("Invalid Credentials!!!");
          this.router.navigate(['/auth-page']);
        }
      } else {
        alert("User not found! Please sign up first.");
        this.router.navigate(['/auth-page']);
      }

      if (this.loginForm.value.rememberMe) {
        localStorage.setItem('rememberMe', JSON.stringify(this.loginForm.value));
      }
    } else {
      console.log('Signup Form Submitted:', this.signupForm.value);

      const user = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      };

      localStorage.setItem('user', JSON.stringify(user));
      alert("Signup Successful! You can now log in.");
      this.isLoginMode = true;
      this.router.navigate(['/auth-page']);
    }
  }

  // Handle forgot password
  onForgotPassword(): void {
    const email = this.loginForm.get('email')?.value;
    if (email) {
      console.log('Forgot Password for:', email);
      // Add logic to send password reset email
    } else {
      alert('Please enter your email address.');
    }
  }
}
