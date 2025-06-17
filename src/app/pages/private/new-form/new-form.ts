import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  imports: [ ReactiveFormsModule],
  templateUrl: './new-form.html',
  styleUrl: './new-form.css'
})
export class UserNewForm {
  
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength( 5 ), Validators.maxLength( 30 )]),
      email: new FormControl("", [Validators.required, Validators.email]),
      passwort: new FormControl("", [Validators.required, Validators.minLength( 4 ), Validators.maxLength(12)]),
      role: new FormControl("", [Validators.required])
    });
  }

  onSubmit() {
    console.log(
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    );

    if(this.formData.valid){
      console.log(this.formData.value)
    }
    
    this.formData.reset()
  }

  ngOnChanges() {
    console.log( 'ngOnChanges' );
  }
  ngOnInit() {
    console.log( 'ngOnInit' );
  }
  ngDoCheck() {
    console.log( 'ngDoCheck' );
  }
  ngAfterContentInit() {
    console.log( 'ngAfterContentInit' );
  }
  ngAfterContentChecked() {
    console.log( 'ngAfterContentChecked' );
  }
  ngAfterViewInit() {
    console.log( 'ngAfterViewInit' );
  }
  ngAfterViewChecked() {
    console.log( 'ngAfterViewChecked' );
  }
  afterEveryRender() {
    console.log( 'afterEveryRender' );
  }
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}

