import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

Contactform: FormGroup;

  constructor() {
    this.Contactform = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      gender: new FormControl('', Validators.required), 
      age: new FormControl('', [Validators.required, Validators.min(0)]),
      DOB: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    
    });
  }


  onSubmit(){
    if (this.Contactform.valid) {
      console.log('Form Submitted!', this.Contactform.value);
      // Here you can handle the form submission, e.g., send data to a server
    } else {
      console.log('Form is invalid');
    }

  }
 



}
