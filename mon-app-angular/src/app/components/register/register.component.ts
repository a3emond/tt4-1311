import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  program = '';

  errorMessage = '';
  successMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  submit() {

    this.errorMessage = '';
    this.successMessage = '';

    const request: RegisterRequest = {
      name: this.name,
      email: this.email,
      password: this.password,
      program: this.program
    };

    this.auth.register(request).subscribe({
      next: () => {
        this.successMessage = 'Account created successfully';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error: () => {
        this.errorMessage = 'Registration failed';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
