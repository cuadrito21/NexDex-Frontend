import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyProfileServices } from "./../../../services/company-profile";

@Component({
  selector: 'app-new-form-company-profile',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new-form-company-profile.html',
  styleUrl: './new-form-company-profile.css'
})
export class NewFormCompanyProfile {

  formData!: FormGroup;
  companyProfile: any = [];

  constructor(private CompanyProfileServices:CompanyProfileServices ){
    this.formData = new FormGroup({
      companyName: new FormControl("",[Validators.required, Validators.minLength( 5 ), Validators.maxLength( 30 )]),
      description: new FormControl("", [Validators.required, Validators.minLength( 15 ), Validators.maxLength( 40 )]),
      website: new FormControl("",[Validators.required,]),
      size: new FormControl("",[])
    })
  }

  onSubmit(){
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

  ngOnInit(){
    this.CompanyProfileServices.getCompanyProfileServices().subscribe({
        next: ( data: any ) => {
        console.log( data);
        this.companyProfile = data
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