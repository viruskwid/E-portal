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

appendTokenHeader(){
  const token = sessionStorage.getItem("token")
  let headers = new HttpHeaders()
  if(token){
    headers = headers.append("Authorization",`Bearer ${token}`)
  }
  return {headers}
}

addComplaintAPI(reqBody:any){
  return this.http.post(`${this.SERVER_URL}/add-complaint`,reqBody,this.appendTokenHeader())
}
getUserComplaintsAPI(){
  return this.http.get(`${this.SERVER_URL}/user-complaints`,this.appendTokenHeader())
}
removeUserComplaintAPI(id: any){
  return this.http.delete(`${this.SERVER_URL}/remove-complaints/${id}`,this.appendTokenHeader())
}

getAllComplaintsAPI(){
  return this.http.get(`${this.SERVER_URL}/all-complaints`)
}
updateComplaintStatus(complaintId: any){
  return this.http.put(`${this.SERVER_URL}/${complaintId}/updateStatus`, this.appendTokenHeader());
}
addWasteAPI(reqBody:any){
  return this.http.post(`${this.SERVER_URL}/add-waste`,reqBody,this.appendTokenHeader())
}
allWasteAPI(){
  return this.http.get(`${this.SERVER_URL}/all-waste`)
}
userWasteAPI(){
  return this.http.get(`${this.SERVER_URL}/user-waste`,this.appendTokenHeader())
}
removeWasteAPI(id:any){
  return this.http.delete(`${this.SERVER_URL}/remove-waste/${id}`,this.appendTokenHeader())
}
allUserAPI(){
  return this.http.get(`${this.SERVER_URL}/all-users`,this.appendTokenHeader())
}
}
