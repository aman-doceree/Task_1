import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  
 signupForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
  if (this.signupForm.valid) {
    console.log('Login data:', this.signupForm.value);

    const existingData = JSON.parse(localStorage.getItem('userData') || '[]');
    existingData.push(this.signupForm.value);
    localStorage.setItem('userData', JSON.stringify(existingData));

    this.router.navigate(['/home']);
  }

}


}
