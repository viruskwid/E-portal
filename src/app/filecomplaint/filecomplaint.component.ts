import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filecomplaint',
  templateUrl: './filecomplaint.component.html',
  styleUrls: ['./filecomplaint.component.css']
})
export class FilecomplaintComponent implements OnInit {
  image:any=[]
  formDatas:any={}
  userName:any
  uniId:any
  customPattern = /^[a-zA-Z0-9.,\/?"'[\]{}\\|!` ]*$/;
 complaintForm = this.fb.group({
   subject:['',[Validators.required,Validators.pattern(this.customPattern)]],
   complaint: ['', [Validators.required, Validators.pattern(this.customPattern)]],

 })
  
  constructor(private fb:FormBuilder,private api:ApiService,private toaster:ToastrService,private router:Router){}
  ngOnInit(): void {
  }

  imageUpload(event:any){
    this.image=event.target.files[0]
    console.log(this.image);
  }
  uuid(){
    var uId = new Date().getTime()
    this.uniId=uId
  }
  upload(){
    if (this.complaintForm.valid) {
      this.userName = sessionStorage.getItem("existingUser")
      const userdata = JSON.parse(this.userName)
      const username=userdata.username
      const image=this.image
      const subject = this.complaintForm.value.subject
      const complaint = this.complaintForm.value.complaint
      this.uuid()
      const complaintId = this.uniId
      const pendingStatus = false
     
      
      this.formDatas = {username,subject,complaint,complaintId,image,pendingStatus}
    
      console.log(this.formDatas);
      
      const reqBody = new FormData()
      reqBody.append("username",this.formDatas.username) 
      reqBody.append("subject",this.formDatas.subject)
      reqBody.append("complaint",this.formDatas.complaint)
      reqBody.append("complaintId",this.formDatas.complaintId)
      reqBody.append("image",this.formDatas.image)
      reqBody.append("pendingStatus",this.formDatas.pendingStatus)
      
       const token = sessionStorage.getItem("token")
       if (token) {
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        this.api.addComplaintAPI(reqBody).subscribe({
          next:(res:any)=>{

           this.toaster.success("Complaint Filed Succesfully")
           this.image = null
            this.complaintForm.reset()
            this.router.navigateByUrl('/complaint-status')
          },
          error:(reason:any)=>{
            this.toaster.warning(reason.error)
          }
        })
  
       } 
    } else {
   
      this.toaster.warning("fill the form completly")

    }
  }
}
