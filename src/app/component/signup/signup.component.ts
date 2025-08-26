import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Input() redirectUrl: string = '/login'; 
  signupForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { name, username, password } = this.signupForm.value;
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some((user: any) => user.username === username);

      if (userExists) {
        this.errorMessage = 'Username already exists. Please choose another.';
        this.successMessage = '';
      } else {
        existingUsers.push({ name, username, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        this.successMessage = 'Signup successful! Redirecting to login...';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate([this.redirectUrl]);
        }, 2000);
      }
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}