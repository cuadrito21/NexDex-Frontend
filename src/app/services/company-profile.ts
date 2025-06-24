import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileServices {

  constructor(private http: HttpClient) { }

  getCompanyProfileServices(){
    return this.http.get(`http://localhost:3000/api/companyprofile`)
  }
}
