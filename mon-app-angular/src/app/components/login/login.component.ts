import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ){}

  submit() { // fix - refactored to use DTO

    this.errorMessage = '';

    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/materials']);
      },
      error: () => {
        this.errorMessage = "Invalid credentials!";
      }
    });
  }

  // submit(){
  //   this.auth.login(this.email, this.password).subscribe({
  //     next: (res)=>{
  //       console.log(res);
  //       this.router.navigate(['/materials'])
  //     },
  //     error: (err)=>{
  //       console.log(err);
  //       this.errorMessage = "Invalid Credentials!"
  //     }
  //   });
  // }

  // navigation method:
  goToRegister() {
    this.router.navigate(['/register']);
  }

}
