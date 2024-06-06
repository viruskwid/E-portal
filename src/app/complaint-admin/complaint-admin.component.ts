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
  pending:boolean=false
  sub:any=[]
  SERVER_URL="https://eportalserver.onrender.com/uploads"
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
updateStatus(sub: any) {
  const { complaint, complaintId, image, subject, userId, username } = sub;
  const pendingStatus = true;
  console.log(subject);
  const reqBody = new FormData();
  reqBody.append("username", username);
  reqBody.append("subject", subject);
  reqBody.append("complaint", complaint);
  reqBody.append("image", image);
  reqBody.append("userId", userId);
  reqBody.append("complaintId", complaintId);
  reqBody.append("pendingStatus", pendingStatus.toString());
  this.api.editComplaintsAPI(complaintId,reqBody).subscribe({
    next:(res:any)=>{
      this.pending=true
      this.toaster.success(`${complaintId} is approved`)
      this.allComplaints()
    },
    error(err:any) {
      console.log(err);
      
    },
  })

}
}
