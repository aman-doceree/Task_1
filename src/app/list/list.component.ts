import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface EditState {
  dataToEdit: any;
  indexToEdit: number;
}

export function passwordStrengthValidator(
  control: AbstractControl
): ValidationErrors | null {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  if (control.value && !regex.test(control.value)) {
    return { weakPassword: true };
  }
  return null;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  contactForm!: FormGroup;
  Sdata: any;

  indexToEdit: number | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state as EditState;

    if (state?.dataToEdit) {
      this.Sdata = state.dataToEdit;
      this.indexToEdit = state.indexToEdit;

      this.contactForm = new FormGroup({
        firstname: new FormControl(this.Sdata.firstname, Validators.required),
        lastname: new FormControl(this.Sdata.lastname, Validators.required),
        email: new FormControl(this.Sdata.email, [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl(this.Sdata.password, [
          Validators.required,
          Validators.minLength(8),
          passwordStrengthValidator,
        ]),
        gender: new FormControl(this.Sdata.gender, Validators.required),
        age: new FormControl(this.Sdata.age, [
          Validators.required,
          Validators.min(0),
          Validators.max(100),
        ]),
        DOB: new FormControl(this.Sdata.DOB, Validators.required),
        address: new FormControl(this.Sdata.address, Validators.required),
      });
    } else {
      this.contactForm = new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          passwordStrengthValidator,
        ]),
        gender: new FormControl('', Validators.required),
        age: new FormControl('', [
          Validators.required,
          Validators.min(0),
          Validators.max(100),
        ]),
        DOB: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
      });
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      let existingData = localStorage.getItem('formData');

      if (!existingData) {
        existingData = '[]';
      }

      let parsedData = JSON.parse(existingData);

      if (this.indexToEdit !== null && this.indexToEdit !== undefined) {
        parsedData[this.indexToEdit] = formData;
      } else {
        parsedData.push(formData);
      }

      localStorage.setItem('formData', JSON.stringify(parsedData));

      console.log('Form Submitted!', formData);

      // Navigate to the '/create' route
      this.router.navigate(['/showdata']);
    } else {
      console.log('Form is invalid');
    }
  }
}
