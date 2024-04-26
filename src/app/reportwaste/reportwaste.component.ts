import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportwaste',
  templateUrl: './reportwaste.component.html',
  styleUrls: ['./reportwaste.component.css']
})
export class ReportwasteComponent implements OnInit{
  image:any=[]
  formDatas:any={}
  userName:any
  uniId:any
  wasteReport=this.fb.group({
    location:['',[Validators.required]],
    type:['',[Validators.required]],
    date:['',[Validators.required]],

  })
constructor(private fb:FormBuilder,private toaster:ToastrService,private api:ApiService,private router:Router){}
ngOnInit(): void {
  
}
uuid(){
  var uid = new Date().getTime()
  this.uniId=uid
}
imageUpload(event:any){
  this.image=event.target.files[0]
  console.log(this.image);
}
upload(){
  if (this.wasteReport.valid) {
    this.userName = sessionStorage.getItem("existingUser")
    const userdata = JSON.parse(this.userName)
    const username=userdata.username
    const image=this.image
    const location = this.wasteReport.value.location
    const type =  this.wasteReport.value.type
    this.uuid()
    const wasteId = this.uniId
    const date = this.wasteReport.value.date
    this.formDatas = {username,image,location,type,wasteId,date}
    
    console.log(this.formDatas);

    const reqBody = new FormData()
    reqBody.append("username",this.formDatas.username) 
    reqBody.append("location",this.formDatas.location)
    reqBody.append("type",this.formDatas.type)
    reqBody.append("image",this.formDatas.image)
    reqBody.append("wasteId",this.formDatas.wasteId)
    reqBody.append("date",this.formDatas.date)
    const token = sessionStorage.getItem("token")
if (token) {
  const reqHeader={
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
  this.api.addWasteAPI(reqBody).subscribe({
    next:(res:any)=>{
      this.toaster.success("Waste reported successfully")
      this.wasteReport.reset()
      this.router.navigateByUrl("/waste-status")
    } 
  })
}
  }else{
    this.toaster.warning("fill the form completly")

  }
}
}
