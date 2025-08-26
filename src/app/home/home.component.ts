import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
    
             onSubmit(){
        if(this.loginForm.valid){
         console.log('Login data:', this.loginForm.value);

            const loginData = this.loginForm.value;

            let storedUsers = [];
            const data = localStorage.getItem('userData');

           if (data) {
             storedUsers = JSON.parse(data);  }     

    const matchedUser = storedUsers.find((usera: { email: string; password: string }) =>
      usera.email === loginData.email &&
      usera.password === loginData.password
    );

    if (matchedUser) {
      console.log('Login successful!');
      this.router.navigate(['/showdata']);
      
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    } else {
      console.log('Login failed. Incorrect email or password.');
    }
        }
 }

  goToSignup(){
    this.router.navigate(['signup']);
  }


}
