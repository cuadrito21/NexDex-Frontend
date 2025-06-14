import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-developer-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './developer-profile.html',
  styleUrl: './developer-profile.css'
})
export class DeveloperProfile {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      passwort: new FormControl(),
      role: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formData.value)
  }

}
