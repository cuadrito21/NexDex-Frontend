import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) {  }
  
  getUserService(){
    return this.http.get(`http://localhost:3000/api/user`)
  }
  
}
