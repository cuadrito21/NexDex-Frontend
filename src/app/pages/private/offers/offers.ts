import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-offers',
  imports: [ReactiveFormsModule],
  templateUrl: './offers.html',
  styleUrl: './offers.css'
})
export class Offers {
  formData!: FormGroup;
  constructor() {
    this.formData = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      señority: new FormControl(),
      Modality: new FormControl(),
      technologiesRequired: new FormControl()
    });
  }
}
