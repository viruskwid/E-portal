import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 SERVER_URL="http://localhost:3000"
  constructor(private http:HttpClient) { }

 //register
  registerAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/register`,user)
  }
  loginAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/login`,user)
  }
//add complaint
addComplaintAPI(reqBody:any,reqHeader:any){
  return this.http.post(`${this.SERVER_URL}/add-complaint`,reqBody,reqHeader)
}
}
