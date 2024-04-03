import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-filecomplaint',
  templateUrl: './filecomplaint.component.html',
  styleUrls: ['./filecomplaint.component.css']
})
export class FilecomplaintComponent implements OnInit {
  image:any=[]
 complaintForm = this.fb.group({
   subject:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   complaint:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   complaintId:['',[Validators.required,Validators.pattern('[0-9]*')]],

 })

  constructor(private fb:FormBuilder,private api:ApiService){}
  ngOnInit(): void {
    
  }
  imageUpload(event:any){
    this.image=event.target.files[0]
    console.log(this.image);
  }
  upload(){
    if (this.complaintForm.valid) {
      const image=this.image
      const subject = this.complaintForm.value.subject as string;
      const complaint = this.complaintForm.value.complaint as string;
      const complaintId = this.complaintForm.value.complaintId as string;
       const reqBody = new FormData()
       if (subject !== undefined && subject !== null) {
        reqBody.append('subject', subject);
      }
      
      if (complaint !== undefined && complaint !== null) {
        reqBody.append('complaint', complaint);
      }
      
      if (complaintId !== undefined && complaintId !== null) {
        reqBody.append('complaintId', complaintId);
      }
      if (image !== undefined && image !== null) {
        reqBody.append('image', image);
      }
       const token = sessionStorage.getItem("token")
       if (token) {
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        this.api.addComplaintAPI(reqBody,reqHeader).subscribe({
          next:(res:any)=>{
            alert(res)
          },
          error:(reason:any)=>{
            alert(reason)
          }
        })
       } 
    } else {
   
      alert("fill the form completly")

    }
  }
}
