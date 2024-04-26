import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complaint-admin',
  templateUrl: './complaint-admin.component.html',
  styleUrls: ['./complaint-admin.component.css']
})
export class ComplaintAdminComponent implements OnInit{
  allcomplaints:any=[]
  status:any
  sub:any=[]
  SERVER_URL="http://localhost:3000/uploads"
constructor(private api:ApiService,private toaster:ToastrService){}

ngOnInit(): void {
  this.allComplaints()
}
allComplaints(){
  this.api.getAllComplaintsAPI().subscribe((res:any)=>{
    this.allcomplaints=res
  
   
 
  })
}

details(complaint:any){
  this.sub = complaint
  console.log(this.sub);
  
}
updateStatus(complaintId: any) {
  this.api.updateComplaintStatus(complaintId).subscribe({
    next:(res:any)=>{
      this.toaster.success("approved")
    },
    error:(reason:any)=>{
      this.toaster.warning(reason)
    }
  })
}
}
