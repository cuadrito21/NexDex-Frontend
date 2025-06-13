import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(),
      nivel: new FormControl(),
      hombre: new FormControl(),
      mujer: new FormControl(),
    });
  }
}
