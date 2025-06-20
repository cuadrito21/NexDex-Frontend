import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-service';
import { clearScreenDown } from 'readline';

@Component({
  selector: 'app-new-form',
  imports: [ ReactiveFormsModule],
  templateUrl: './new-form.html',
  styleUrl: './new-form.css'
})
export class UserNewForm {
  
  formData!: FormGroup;
  user: any = []

  constructor( private userService: UserService  ) {
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

  ngOnInit() {
    this.userService.getUserService().subscribe({
      next: ( data: any ) => {
        console.log( data);
        this.user = data
      },
      error: ( error: any ) => {
        console.log(error);
      },
      complete: () => {
        console.log( "Complete" );
      } 
    })
  }

  ngOnDestroy(){
    console.log( "ngOnDestroy" );
  }

}

